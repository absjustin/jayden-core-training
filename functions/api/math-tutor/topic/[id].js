// GET /api/math-tutor/topic/:id
// Returns topic details, learning materials, and quiz questions

export async function onRequest({ env, params }) {
  const topicId = params.id || 'ch1';

  try {
    // Use raw SQL to debug
    const stmt = env.MATH_TUTOR_DB.prepare("SELECT * FROM topics WHERE id = ?");
    const topicResults = await stmt.bind(topicId).all();
    
    if (!topicResults.results || topicResults.results.length === 0) {
      return new Response(JSON.stringify({ error: "Topic not found", debug: { topicId } }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get quiz questions
    const quizStmt = env.MATH_TUTOR_DB.prepare("SELECT id, question, question_type, options, difficulty FROM quiz_questions WHERE topic_id = ?");
    const quizResults = await quizStmt.bind(topicId).all();

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
    return new Response(JSON.stringify({ 
      error: error.message,
      debug: { topicId, params }
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}