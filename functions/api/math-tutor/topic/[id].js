// GET /api/math-tutor/topic/:id
// Returns topic details, learning materials, and quiz questions

export async function onRequest({ env, params }) {
  const topicId = params.id;

  try {
    // Simple query to test
    const topicResult = await env.MATH_TUTOR_DB.exec(`
      SELECT * FROM topics WHERE id = '${topicId}'
    `);

    // Get quiz questions only
    const quizResult = await env.MATH_TUTOR_DB.exec(`
      SELECT id, question, question_type, options, difficulty
      FROM quiz_questions
      WHERE topic_id = '${topicId}'
      ORDER BY difficulty, id
    `);

    return new Response(
      JSON.stringify({
        topic: topicResult,
        quizQuestions: quizResult,
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