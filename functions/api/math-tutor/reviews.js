// GET /api/math-tutor/reviews?userId=xxx
// Returns topics due for spaced repetition review

export async function onRequest({ env, url }) {
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return new Response(JSON.stringify({ error: "userId required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const dueReviewsResult = await env.MATH_TUTOR_DB.prepare(`
      SELECT
        rs.id,
        rs.topic_id,
        rs.interval_days,
        rs.repetition_count,
        rs.ease_factor,
        rs.next_review_at,
        t.title,
        t.chapter
      FROM review_schedule rs
      JOIN topics t ON rs.topic_id = t.id
      WHERE rs.user_id = ?
        AND rs.next_review_at <= datetime('now')
      ORDER BY rs.next_review_at ASC
    `).bind(userId).all();

    // Also get topics where mastery is incomplete (wrong answers recently)
    const weakTopicsResult = await env.MATH_TUTOR_DB.prepare(`
      SELECT DISTINCT
        qa.topic_id,
        t.title,
        t.chapter,
        COUNT(*) as total_attempts,
        SUM(CASE WHEN qa.is_correct = 0 THEN 1 ELSE 0 END) as wrong_count
      FROM quiz_attempts qa
      JOIN topics t ON qa.topic_id = t.id
      WHERE qa.user_id = ?
        AND qa.attempted_at > datetime('now', '-7 days')
      GROUP BY qa.topic_id
      HAVING wrong_count > 0
      ORDER BY wrong_count DESC
      LIMIT 5
    `).bind(userId).all();

    return new Response(
      JSON.stringify({
        dueReviews: dueReviewsResult.results || [],
        weakTopics: weakTopicsResult.results || [],
        currentStreak: 0, // Simplified for now
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