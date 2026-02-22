// GET /api/math-tutor/topic/:id
// Returns topic details, learning materials, and quiz questions

export async function onRequest({ env, params }) {
  const { id } = params;

  try {
    // Get topic info - bind params differently
    const topicResult = await env.MATH_TUTOR_DB.prepare(`
      SELECT * FROM topics WHERE id = ?
    `).all(id);

    const topic = topicResult.results?.[0];

    if (!topic) {
      return new Response(JSON.stringify({ error: "Topic not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get learning materials
    const materials = await env.MATH_TUTOR_DB.prepare(`
      SELECT * FROM learning_materials
      WHERE topic_id = ?
      ORDER BY order_index
    `).all(id);

    // Get quiz questions
    const quizQuestions = await env.MATH_TUTOR_DB.prepare(`
      SELECT id, question, question_type, options, difficulty
      FROM quiz_questions
      WHERE topic_id = ?
      ORDER BY difficulty, id
    `).all(id);

    return new Response(
      JSON.stringify({
        topic,
        materials: materials.results,
        quizQuestions: quizQuestions.results,
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