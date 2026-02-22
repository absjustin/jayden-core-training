// POST /api/math-tutor/quiz/submit
// Submits a quiz answer, updates progress, and schedules review (Forgetting Curve)

export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { userId, topicId, questionId, userAnswer, isCorrect } = await request.json();

  try {
    // Record the quiz attempt
    await env.MATH_TUTOR_DB.prepare(`
      INSERT INTO quiz_attempts (id, user_id, topic_id, question_id, user_answer, is_correct)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(
      crypto.randomUUID(),
      userId,
      topicId,
      questionId,
      userAnswer,
      isCorrect ? 1 : 0
    ).run();

    // Update user progress - use bind().run() pattern
    await env.MATH_TUTOR_DB.prepare(`
      INSERT INTO user_progress (id, user_id, topic_id, status, last_accessed_at, started_at)
      VALUES (?, ?, ?, 'in_progress', datetime('now'), datetime('now'))
      ON CONFLICT(user_id, topic_id) DO UPDATE SET
        status = 'in_progress',
        last_accessed_at = datetime('now')
    `).bind(crypto.randomUUID(), userId, topicId).run();

    // Calculate next review time using SM-2 algorithm (Forgetting Curve)
    const now = new Date();
    let nextReviewDate = new Date(now);
    let intervalDays = 1;
    let easeFactor = 2.5;
    let repetitionCount = 1;

    // Get existing review schedule if any
    const existingResult = await env.MATH_TUTOR_DB.prepare(`
      SELECT * FROM review_schedule WHERE user_id = ? AND topic_id = ?
    `).bind(userId, topicId).first();

    if (existingResult) {
      easeFactor = existingResult.ease_factor;
      repetitionCount = existingResult.repetition_count;

      if (isCorrect) {
        // Correct answer - increase interval (SM-2)
        if (repetitionCount === 0) {
          intervalDays = 1;
        } else if (repetitionCount === 1) {
          intervalDays = 6;
        } else {
          intervalDays = Math.round(existingResult.interval_days * easeFactor);
        }
        repetitionCount++;
      } else {
        // Incorrect answer - reset to shorter interval
        intervalDays = 1;
        repetitionCount = 0;
      }

      // Update existing schedule
      await env.MATH_TUTOR_DB.prepare(`
        UPDATE review_schedule
        SET next_review_at = datetime('now', '+' || ? || ' days'),
            interval_days = ?, ease_factor = ?, repetition_count = ?,
            last_reviewed_at = datetime('now')
        WHERE user_id = ? AND topic_id = ?
      ).bind(intervalDays, intervalDays, easeFactor, repetitionCount, userId, topicId).run();
    } else {
      // New review item
      nextReviewDate.setDate(nextReviewDate.getDate() + intervalDays);
      await env.MATH_TUTOR_DB.prepare(`
        INSERT INTO review_schedule (id, user_id, topic_id, next_review_at, interval_days, ease_factor, repetition_count, last_reviewed_at)
        VALUES (?, ?, ?, datetime('now', '+' || ? || ' days'), ?, ?, ?, datetime('now'))
      ).bind(crypto.randomUUID(), userId, topicId, intervalDays, intervalDays, easeFactor, repetitionCount).run();
    }

    return new Response(
      JSON.stringify({
        success: true,
        isCorrect,
        nextReviewInDays: intervalDays,
        spacedRepetition: {
          intervalDays,
          easeFactor,
          repetitionCount,
        },
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}