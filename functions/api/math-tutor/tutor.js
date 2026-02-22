// POST /api/math-tutor/tutor
// AI tutor chat using OpenRouter (uses the secure proxy setup)

export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { userId, topicId, messages, context } = await request.json();

  if (!messages || !Array.isArray(messages)) {
    return new Response(JSON.stringify({ error: "messages array required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Build system prompt for math tutor
    const systemPrompt = `You are a patient, encouraging math tutor for a 4th grader.
    - Be friendly, supportive, and use age-appropriate language
    - Use concrete examples and analogies they can understand
    - Break down complex problems into smaller steps
    - Celebrate their progress and effort
    - If they make a mistake, gently guide them to the right answer without making them feel bad
    - Use humor and fun examples when possible
    ${context ? `\n\nCurrent topic context: ${JSON.stringify(context)}` : ""}`;

    // Prepare messages for OpenRouter
    const openRouterMessages = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];

    // Call OpenRouter via the API route (which handles auth securely)
    const response = await fetch(`${new URL(request.url).origin}/api/openrouter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "anthropic/claude-3-5-sonnet",
        messages: openRouterMessages,
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "AI service unavailable");
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // Save conversation to database (optional, for context)
    if (userId) {
      try {
        await env.MATH_TUTOR_DB.prepare(`
          INSERT INTO tutor_sessions (id, user_id, topic_id, messages)
          VALUES (?, ?, ?, ?)
        `).bind(
          crypto.randomUUID(),
          userId,
          topicId || null,
          JSON.stringify([
            ...messages,
            { role: "assistant", content: assistantMessage },
          ])
        ).run();
      } catch (e) {
        // Silent fail - session logging is optional
      }
    }

    return new Response(
      JSON.stringify({
        message: assistantMessage,
        usage: data.usage,
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