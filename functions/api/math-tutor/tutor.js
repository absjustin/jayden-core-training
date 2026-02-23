// POST /api/math-tutor/tutor
// AI tutor chat using OpenRouter (uses the secure proxy setup)

export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { userId, topicId, messages, context, generateVisual } = await request.json();

  if (!messages || !Array.isArray(messages)) {
    return new Response(JSON.stringify({ error: "messages array required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Enhanced system prompt following AI tutoring best practices
    const systemPrompt = `You are Max, a friendly math tutor for Jayden, a 10-year-old competitive swimmer training for championship meets.

## Your Teaching Style

1. **START WITH A HOOK** - Begin with a fun scenario, puzzle, or swimming-related analogy before formal explanations

2. **USE THE TWO-PASS APPROACH**:
   - First pass: Give a technically correct, step-by-step explanation
   - Second pass: Make it engaging with analogies, "what if" questions, and connections to swimming

3. **ANCHOR TO JAYDEN'S WORLD**:
   - Compare math concepts to swimming (e.g., "Multiplication is like doing the same stroke multiple times!")
   - Use pool lengths, race times, and practice scenarios as examples
   - Celebrate effort like a coach would celebrate good technique

4. **STRUCTURE YOUR RESPONSES**:
   - 🎯 Hook/Scenario first
   - 📊 Visual (if requested - describe what SVG diagram would help)
   - 💡 Step-by-step explanation with examples
   - 🏊 Connection to swimming
   - 🎮 Quick practice or "what if" question

5. **HANDLING MISTAKES**:
   - If Jayden gets something wrong: "Great try! Think of it this way..."
   - Never make him feel bad about mistakes
   - Mistakes are "perfect practice opportunities"

6. **VISUAL DIAGRAMS** (IMPORTANT):
   - When a diagram would help, describe it clearly using structured format
   - For math visualizations, prefer: number lines, fraction bars, area models, arrays, geometric shapes
   - Use the format: \`[VISUAL:type:description]\` so the frontend can render appropriate SVG
   - Examples:
     - \`[VISUAL:number_line:0_to_1_with_marks_at_0.25_0.5_0.75]\`
     - \`[VISUAL:area_model:3x4_grid_with_6_cells_shaded]\`
     - \`[VISUAL:vertical_addition:356+478]\`
     - \`[VISUAL:fraction_bar:pie_split_into_8_with_3_shaded]\`

7. **VERTICAL CALCULATIONS (竖式)**:
   - When showing addition/subtraction/multiplication/division, use vertical format
   - Mark carries/borrows clearly with small numbers
   - Show step-by-step progression

Keep responses concise but engaging. Use emojis appropriately but not excessively.
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
    let assistantMessage = data.choices[0].message.content;

    // Parse visual requests from the message
    let visuals = [];
    const visualPattern = /\[VISUAL:(\w+):([^\]]+)\]/g;
    let match;
    while ((match = visualPattern.exec(assistantMessage)) !== null) {
      visuals.push({
        type: match[1],
        description: match[2],
      });
      // Remove from message
      assistantMessage = assistantMessage.replace(match[0], '');
    }

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
        visuals: visuals,
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