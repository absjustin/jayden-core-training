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
    const { results } = await env.MATH_TUTOR_DB.prepare(`
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
    `).all(userId);

    // Also get topics where mastery is incomplete (wrong answers recently)
    const weakTopics = await env.MATH_TUTOR_DB.prepare(`
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
    `).all(userId);

    return new Response(
      JSON.stringify({
        dueReviews: results,
        weakTopics: weakTopics.results,
        currentStreak: await getUserStreak(env, userId),
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

async function getUserStreak(env, userId) {
  // Calculate consecutive days with quiz activity
  const { results } = await env.MATH_TUTOR_DB.prepare(`
    SELECT DISTINCT date(attempted_at) as activity_date
    FROM quiz_attempts
    WHERE user_id = ?
    ORDER BY activity_date DESC
    LIMIT 30
  `).all(userId);

  if (results.length === 0) return 0;

  let streak = 0;
  const today = new Date().toISOString().split("T")[0];
  const dates = results.map((r) => r.activity_date);

  // Check if today or yesterday has activity (streak still alive)
  if (dates[0] !== today && dates[0] !== getYesterday()) {
    return 0;
  }

  for (const date of dates) {
    if (date === getYesterday() || date === today) {
      if (date === getYesterday() && dates[0] === today) continue;
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

function getYesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().split("T")[0];
}