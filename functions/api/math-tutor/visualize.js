// GET /api/math-tutor/visualize?type=number_line¶ms=...
// Generate SVG math visualizations

import { MathVisualizer } from "../../../math-visualizer.js";

export async function onRequest({ env, url }) {
  const type = url.searchParams.get("type");
  
  if (!type) {
    return new Response(JSON.stringify({ 
      error: "type parameter required",
      availableTypes: [
        "number_line",
        "fraction_bar", 
        "area_model",
        "array",
        "geometry",
        "vertical_addition",
        "vertical_subtraction",
        "vertical_multiplication",
        "vertical_division"
      ]
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const visualizer = new MathVisualizer();
    let svg;
    let params = {};

    // Parse common parameters
    const num1 = parseInt(url.searchParams.get("num1") || "0");
    const num2 = parseInt(url.searchParams.get("num2") || "0");
    const numerator = parseInt(url.searchParams.get("numerator") || "3");
    const denominator = parseInt(url.searchParams.get("denominator") || "4");
    const rows = parseInt(url.searchParams.get("rows") || "3");
    const cols = parseInt(url.searchParams.get("cols") || "4");
    const start = parseInt(url.searchParams.get("start") || "0");
    const end = parseInt(url.searchParams.get("end") || "10");
    const shape = url.searchParams.get("shape") || "rectangle";

    switch (type) {
      case "number_line":
        const marksParam = url.searchParams.get("marks") || "";
        const marks = marksParam.split(",").filter(Boolean).map((m, i) => ({
          position: parseFloat(m),
          label: m,
          color: i === 0 ? "#f472b6" : "#3b82f6"
        }));
        svg = visualizer.createNumberLine({ start, end, marks });
        break;

      case "fraction_bar":
        svg = visualizer.createFractionBar({ numerator, denominator, shape });
        break;

      case "area_model":
        const shadedRows = parseInt(url.searchParams.get("shadedRows") || rows.toString());
        const shadedCols = parseInt(url.searchParams.get("shadedCols") || cols.toString());
        svg = visualizer.createAreaModel({ rows, cols, shadedRows, shadedCols });
        break;

      case "array":
        const highlightRows = parseInt(url.searchParams.get("highlightRows") || "0");
        const highlightCols = parseInt(url.searchParams.get("highlightCols") || "0");
        const highlight = highlightRows > 0 ? { rows: highlightRows, cols: highlightCols, color: "#f472b6" } : null;
        svg = visualizer.createArray(rows, cols, highlight);
        break;

      case "geometry":
        const geomType = url.searchParams.get("shape") || "triangle";
        svg = visualizer.createGeometry({ type: geomType });
        break;

      case "vertical_addition":
        if (!num1 || !num2) {
          return new Response(JSON.stringify({ error: "num1 and num2 required for vertical_addition" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        svg = visualizer.createVerticalCalculation({ 
          operation: 'add', num1, num2,
          showCarries: url.searchParams.get("showCarries") !== "false",
        });
        break;

      case "vertical_subtraction":
        if (!num1 || !num2) {
          return new Response(JSON.stringify({ error: "num1 and num2 required for vertical_subtraction" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        svg = visualizer.createVerticalCalculation({ 
          operation: 'sub', num1, num2,
          showBorrows: url.searchParams.get("showBorrows") !== "false",
        });
        break;

      case "vertical_multiplication":
        if (!num1 || !num2) {
          return new Response(JSON.stringify({ error: "num1 and num2 required for vertical_multiplication" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        svg = visualizer.createVerticalCalculation({ 
          operation: 'mul', num1, num2,
        });
        break;

      case "vertical_division":
        if (!num1 || !num2) {
          return new Response(JSON.stringify({ error: "num1 and num2 required for vertical_division" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        svg = visualizer.createVerticalCalculation({ 
          operation: 'div', num1, num2,
        });
        break;

      default:
        return new Response(JSON.stringify({ error: `Unknown type: ${type}` }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}