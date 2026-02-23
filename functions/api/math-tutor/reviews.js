// GET /api/math-tutor/reviews?userId=xxx
// Returns topics due for spaced repetition review

export async function onRequest({ env, request }) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return new Response(JSON.stringify({ error: "userId required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Simple test query first
    const testResult = await env.MATH_TUTOR_DB.prepare(`
      SELECT COUNT(*) as cnt FROM review_schedule WHERE user_id = ?
    `).bind(userId).first();

    return new Response(
      JSON.stringify({
        userId,
        reviewCount: testResult?.cnt || 0,
        message: "Reviews API working",
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message, type: error.constructor.name }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}