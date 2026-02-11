/**
 * Frontend API Client for Cloudflare Worker
 * Replace any direct OpenRouter calls with this helper
 */

const API_BASE = "/api/openrouter"; // Relative URL - routes to the worker

export async function callOpenRouter(messages, model = "anthropic/claude-3-5-sonnet") {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      messages: messages,
      max_tokens: 4096,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "API request failed");
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Example usage:
// const response = await callOpenRouter([
//   { role: "user", content: "Create a swim workout for today" }
// ]);
// console.log(response);
