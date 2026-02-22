// GET /api/math-tutor/syllabus
// Returns the complete syllabus organized by grade level and chapter

export async function onRequest({ env, params }) {
  try {
    const { results } = await env.MATH_TUTOR_DB.prepare(`
      SELECT id, grade_level, chapter, title, description, order_index, parent_topic_id
      FROM topics
      WHERE grade_level = 4
      ORDER BY chapter, order_index
    `).all();

    return new Response(JSON.stringify({ syllabus: results }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}