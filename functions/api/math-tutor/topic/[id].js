// GET /api/math-tutor/topic/:id
// Returns topic details, learning materials, and quiz questions

export async function onRequest({ env, params }) {
  const topicId = params.id;

  try {
    // Get topic info - using raw query approach
    const topicResults = await env.MATH_TUTOR_DB.prepare(
      "SELECT * FROM topics WHERE id = ?"
    ).all(topicId);

    if (!topicResults.results || topicResults.results.length === 0) {
      return new Response(JSON.stringify({ error: "Topic not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get quiz questions
    const quizResults = await env.MATH_TUTOR_DB.prepare(
      "SELECT id, question, question_type, options, difficulty FROM quiz_questions WHERE topic_id = ? ORDER BY difficulty, id"
    ).all(topicId);

    return new Response(
      JSON.stringify({
        topic: topicResults.results[0],
        quizQuestions: quizResults.results || [],
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message, stack: error.stack }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}