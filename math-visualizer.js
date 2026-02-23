/**
 * Math Visualization Library for Jayden's Math Tutor
 * Generates SVG-based math diagrams: number lines, fractions, vertical calculations, etc.
 */

export class MathVisualizer {
  constructor() {
    this.colors = {
      primary: '#8b5cf6',      // Purple
      secondary: '#3b82f6',    // Blue
      success: '#22c55e',      // Green
      warning: '#f59e0b',      // Orange
      highlight: '#f472b6',    // Pink
      grid: '#e5e7eb',         // Gray
      text: '#374151',         // Dark gray
    };
  }

  // ==================== NUMBER LINES ====================
  
  /**
   * Generate a number line SVG
   * @param {Object} options - Configuration options
   * @returns {string} SVG markup
   */
  createNumberLine(options = {}) {
    const {
      start = 0,
      end = 10,
      divisions = 10,
      marks = [],  // Array of {position, label, color}
      showTicks = true,
      showNumbers = true,
      width = 600,
      height = 120,
    } = options;

    const lineY = height / 2;
    const startX = 50;
    const endX = width - 50;
    const lineLength = endX - startX;
    const unitLength = lineLength / (end - start);

    let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    
    // Main line
    svg += `<line x1="${startX}" y1="${lineY}" x2="${endX}" y2="${lineY}" 
            stroke="${this.colors.text}" stroke-width="2"/>`;

    // Arrow at end
    svg += `<polygon points="${endX},${lineY-6} ${endX+10},${lineY} ${endX},${lineY+6}" 
            fill="${this.colors.text}"/>`;

    // Ticks and numbers
    for (let i = 0; i <= divisions; i++) {
      const value = start + (i * (end - start) / divisions);
      const x = startX + (value - start) * unitLength;
      
      if (showTicks) {
        svg += `<line x1="${x}" y1="${lineY-8}" x2="${x}" y2="${lineY+8}" 
                stroke="${this.colors.text}" stroke-width="1.5"/>`;
      }
      
      if (showNumbers) {
        svg += `<text x="${x}" y="${lineY + 30}" text-anchor="middle" 
                font-family="Inter, sans-serif" font-size="14" fill="${this.colors.text}">
                ${Number.isInteger(value) ? value : value.toFixed(1)}
                </text>`;
      }
    }

    // Custom marks
    marks.forEach(mark => {
      const x = startX + (mark.position - start) * unitLength;
      const color = mark.color || this.colors.highlight;
      
      svg += `<circle cx="${x}" cy="${lineY}" r="8" fill="${color}" stroke="white" stroke-width="2"/>`;
      
      if (mark.label) {
        svg += `<text x="${x}" y="${lineY - 20}" text-anchor="middle" 
                font-family="Inter, sans-serif" font-size="14" font-weight="bold" fill="${color}">
                ${mark.label}
                </text>`;
      }
    });

    svg += '</svg>';
    return svg;
  }

  // ==================== FRACTION BARS ====================
  
  /**
   * Create a fraction bar/area model visualization
   */
  createFractionBar(options = {}) {
    const {
      numerator = 3,
      denominator = 4,
      shape = 'rectangle', // rectangle, circle
      width = 400,
      height = 80,
      showLabels = true,
    } = options;

    const cellWidth = width / denominator;
    const cellHeight = height;
    const labelY = height + 25;

    let svg = `<svg viewBox="0 0 ${width} ${height + 40}" xmlns="http://www.w3.org/2000/svg">`;

    // Draw cells
    for (let i = 0; i < denominator; i++) {
      const x = i * cellWidth;
      const isShaded = i < numerator;
      
      if (shape === 'rectangle') {
        // Draw cell
        svg += `<rect x="${x}" y="0" width="${cellWidth - 2}" height="${cellHeight}" 
                fill="${isShaded ? this.colors.primary : 'white'}" 
                stroke="${this.colors.text}" stroke-width="2"
                rx="4"/>`;
        
        // Shading overlay for shaded cells
        if (isShaded) {
          svg += `<rect x="${x}" y="0" width="${cellWidth - 2}" height="${cellHeight}" 
                  fill="${this.colors.primary}" fill-opacity="0.3" rx="4"/>`;
        }
      } else if (shape === 'circle') {
        // Pie slices
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 10;
        const startAngle = (i / denominator) * 360;
        const endAngle = ((i + 1) / denominator) * 360;
        
        const startRad = (startAngle - 90) * Math.PI / 180;
        const endRad = (endAngle - 90) * Math.PI / 180;
        
        const x1 = centerX + radius * Math.cos(startRad);
        const y1 = centerY + radius * Math.sin(startRad);
        const x2 = centerX + radius * Math.cos(endRad);
        const y2 = centerY + radius * Math.sin(endRad);
        
        const largeArc = denominator > 2 ? 1 : 0;
        
        svg += `<path d="M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z" 
                fill="${isShaded ? this.colors.primary : 'white'}" 
                stroke="${this.colors.text}" stroke-width="2"/>`;
      }
    }

    // Labels
    if (showLabels) {
      svg += `<text x="${(numerator - 0.5) * cellWidth}" y="${labelY + 15}" text-anchor="middle" 
              font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="${this.colors.primary}">
              ${numerator}</text>`;
      
      svg += `<line x1="${cellWidth}" y1="${height}" x2="${cellWidth}" y2="${height + 10}" 
              stroke="${this.colors.text}" stroke-width="2"/>`;
      
      svg += `<text x="${(denominator - 0.5) * cellWidth}" y="${labelY + 15}" text-anchor="middle" 
              font-family="Inter, sans-serif" font-size="16" font-weight="bold" fill="${this.colors.text}">
              ${denominator}</text>`;
    }

    svg += '</svg>';
    return svg;
  }

  // ==================== VERTICAL CALCULATIONS (竖式) ====================
  
  /**
   * Create vertical calculation display (addition, subtraction, multiplication, division)
   */
  createVerticalCalculation(options = {}) {
    const {
      operation = 'add', // add, sub, mul, div
      num1 = 356,
      num2 = 478,
      showWork = true,
      showAnswer = true,
      showCarries = true,
      showBorrows = true,
      width = 200,
    } = options;

    const n1Str = num1.toString();
    const n2Str = num2.toString();
    const maxLen = Math.max(n1Str.length, n2Str.length);
    const digitWidth = 40;
    const lineY = 50;
    
    const svgWidth = maxLen * digitWidth + 40;
    const svgHeight = operation === 'div' ? 200 : (showWork ? 120 : 80);

    let svg = `<svg viewBox="0 0 ${svgWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<style>
      .digit { font-family: 'Inter', sans-serif; font-size: 24px; text-anchor: middle; }
      .small-digit { font-size: 12px; fill: ${this.colors.warning}; }
      .operator { font-size: 20px; }
      .line { stroke: ${this.colors.text}; stroke-width: 2; }
      .result { fill: ${this.colors.success}; font-weight: bold; }
    </style>`;

    // Draw first number (right-aligned)
    for (let i = 0; i < n1Str.length; i++) {
      const digit = n1Str[n1Str.length - 1 - i];
      const x = svgWidth - 20 - (i * digitWidth);
      svg += `<text x="${x}" y="${lineY}" class="digit">${digit}</text>`;
    }

    // Draw operator and second number
    const opSymbol = operation === 'add' ? '+' : operation === 'sub' ? '−' : operation === 'mul' ? '×' : '÷';
    svg += `<text x="20" y="${lineY}" class="operator">${opSymbol}</text>`;
    
    for (let i = 0; i < n2Str.length; i++) {
      const digit = n2Str[n2Str.length - 1 - i];
      const x = svgWidth - 20 - (i * digitWidth);
      svg += `<text x="${x}" y="${lineY}" class="digit">${digit}</text>`;
    }

    // Divider line
    const lineStart = 10;
    const lineEnd = svgWidth - 10;
    svg += `<line x1="${lineStart}" y1="${lineY + 10}" x2="${lineEnd}" y2="${lineY + 10}" class="line"/>`;

    if (showWork && (operation === 'add' || operation === 'sub')) {
      const result = operation === 'add' ? num1 + num2 : num1 - num2;
      const rStr = result.toString();
      
      // Draw carries/borrows
      if (showCarries && operation === 'add') {
        for (let i = 0; i < Math.min(n1Str.length, n2Str.length); i++) {
          const d1 = parseInt(n1Str[n1Str.length - 1 - i]);
          const d2 = parseInt(n2Str[n2Str.length - 1 - i]);
          if (d1 + d2 >= 10 && i < rStr.length - 1) {
            const carry = Math.floor((d1 + d2) / 10);
            const x = svgWidth - 5 - (i * digitWidth);
            svg += `<text x="${x}" y="${lineY - 15}" class="digit small-digit">${carry}</text>`;
          }
        }
      }
      
      if (showBorrows && operation === 'sub') {
        for (let i = 0; i < Math.min(n1Str.length, n2Str.length); i++) {
          const d1 = parseInt(n1Str[n1Str.length - 1 - i]);
          const d2 = parseInt(n2Str[n2Str.length - 1 - i]);
          if (d2 > d1 && i < n1Str.length - 1) {
            const borrow = 10 + d1 - d2;
            const x = svgWidth - 20 - (i * digitWidth);
            svg += `<text x="${x}" y="${lineY - 15}" class="digit small-digit">${borrow}</text>`;
          }
        }
      }

      // Draw result
      if (showAnswer) {
        for (let i = 0; i < rStr.length; i++) {
          const digit = rStr[rStr.length - 1 - i];
          const x = svgWidth - 20 - (i * digitWidth);
          svg += `<text x="${x}" y="${lineY + 35}" class="digit result">${digit}</text>`;
        }
      }
    } else if (showWork && operation === 'mul') {
      // Multiplication work
      let product = num1 * num2;
      const pStr = product.toString();
      
      if (showAnswer) {
        for (let i = 0; i < pStr.length; i++) {
          const digit = pStr[pStr.length - 1 - i];
          const x = svgWidth - 20 - (i * digitWidth);
          svg += `<text x="${x}" y="${lineY + 35}" class="digit result">${digit}</text>`;
        }
      }
    } else if (operation === 'div') {
      // Long division
      const quotient = Math.floor(num1 / num2);
      const remainder = num1 % num2;
      const qStr = quotient.toString();
      
      // Draw quotient above
      svg += `<text x="${svgWidth - 20}" y="${lineY - 20}" class="digit result">${quotient}</text>`;
      svg += `<text x="${svgWidth - 20}" y="${lineY + 35}" class="digit result">R${remainder}</text>`;
      
      // Show: num1 ÷ num2 = quotient R remainder
      svg += `<text x="${svgWidth / 2}" y="${lineY + 60}" class="digit" fill="${this.colors.text}">
              ${num1} ÷ ${num2} = ${quotient} R ${remainder}
              </text>`;
    }

    svg += '</svg>';
    return svg;
  }

  // ==================== AREA MODELS ====================
  
  /**
   * Create area model for multiplication
   */
  createAreaModel(options = {}) {
    const {
      rows = 3,
      cols = 4,
      shadedRows = 3, // For showing partial products
      shadedCols = 4,
      showLabels = true,
      showProduct = true,
    } = options;

    const cellSize = 60;
    const width = cols * cellSize + 60;
    const height = rows * cellSize + 60;
    
    let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    
    const totalCells = rows * cols;
    const shadedCells = shadedRows * shadedCols;
    const product = shadedRows * shadedCols;

    // Draw cells
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = 50 + c * cellSize;
        const y = 10 + r * cellSize;
        const isShaded = r < shadedRows && c < shadedCols;
        
        svg += `<rect x="${x}" y="${y}" width="${cellSize - 2}" height="${cellSize - 2}" 
                fill="${isShaded ? this.colors.primary : 'white'}" 
                stroke="${this.colors.text}" stroke-width="2" rx="4"/>`;
        
        // Show number in cell
        svg += `<text x="${x + cellSize/2}" y="${y + cellSize/2 + 6}" 
                text-anchor="middle" font-family="Inter, sans-serif" font-size="18" 
                fill="${isShaded ? 'white' : this.colors.text}">1</text>`;
      }
    }

    // Labels
    if (showLabels) {
      // Row labels
      svg += `<text x="20" y="${10 + shadedRows * cellSize / 2 + 6}" 
              font-family="Inter, sans-serif" font-size="14" fill="${this.colors.primary}">
              ${shadedRows} rows
              </text>`;
      
      svg += `<text x="20" y="${10 + rows * cellSize - 10}" 
              font-family="Inter, sans-serif" font-size="14" fill="${this.colors.text}">
              ${rows} rows
              </text>`;
      
      // Column labels
      svg += `<text x="${50 + shadedCols * cellSize / 2}" y="${height - 10}" 
              text-anchor="middle" font-family="Inter, sans-serif" font-size="14" 
              fill="${this.colors.primary}">${shadedCols} columns</text>`;
      
      svg += `<text x="${50 + cols * cellSize - 20}" y="${height - 10}" 
              text-anchor="middle" font-family="Inter, sans-serif" font-size="14" 
              fill="${this.colors.text}">${cols} columns</text>`;
    }

    // Product
    if (showProduct) {
      svg += `<text x="${width / 2}" y="${height - 5}" text-anchor="middle" 
              font-family="Inter, sans-serif" font-size="20" font-weight="bold" 
              fill="${this.colors.success}">
              ${shadedRows} × ${shadedCols} = ${product} shaded cells
              </text>`;
    }

    svg += '</svg>';
    return svg;
  }

  // ==================== ARRAY MODEL ====================
  
  /**
   * Create array visualization for multiplication
   */
  createArray(rows, cols, highlightColor = null) {
    const cellSize = 50;
    const padding = 40;
    const width = cols * cellSize + padding * 2;
    const height = rows * cellSize + padding * 2;
    
    let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    
    // Background
    svg += `<rect x="0" y="0" width="${width}" height="${height}" fill="#fefce8" rx="8"/>`;
    
    // Title
    svg += `<text x="${width/2}" y="20" text-anchor="middle" 
            font-family="Inter, sans-serif" font-size="16" font-weight="bold" 
            fill="${this.colors.text}">${rows} groups of ${cols}</text>`;
    
    // Draw dots
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = padding + c * cellSize + cellSize / 2;
        const y = padding + 30 + r * cellSize + cellSize / 2;
        const color = highlightColor && r < highlightColor.rows && c < highlightColor.cols 
          ? highlightColor.color 
          : this.colors.secondary;
        
        svg += `<circle cx="${x}" cy="${y}" r="12" fill="${color}" stroke="white" stroke-width="2"/>`;
        svg += `<text x="${x}" y="${y + 5}" text-anchor="middle" 
                font-family="Inter, sans-serif" font-size="12" fill="white">1</text>`;
      }
    }

    // Row labels
    for (let r = 0; r < rows; r++) {
      svg += `<text x="${padding - 15}" y="${padding + 30 + r * cellSize + cellSize / 2 + 5}" 
              text-anchor="end" font-family="Inter, sans-serif" font-size="14" 
              fill="${this.colors.text}">Row ${r + 1}</text>`;
    }

    // Total
    const total = rows * cols;
    svg += `<text x="${width/2}" y="${height - 10}" text-anchor="middle" 
            font-family="Inter, sans-serif" font-size="18" font-weight="bold" 
            fill="${this.colors.success}">Total: ${rows} × ${cols} = ${total}</text>`;

    svg += '</svg>';
    return svg;
  }

  // ==================== GEOMETRIC SHAPES ====================
  
  /**
   * Create geometric shape with angle visualization
   */
  createGeometry(options = {}) {
    const {
      type = 'triangle', // triangle, rectangle, circle, angle
      width = 200,
      height = 200,
      showAngles = true,
      angleSize = 30,
    } = options;

    let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect x="0" y="0" width="${width}" height="${height}" fill="#f0f9ff" rx="8"/>`;

    const cx = width / 2;
    const cy = height / 2;

    if (type === 'triangle') {
      // Equilateral triangle
      const size = Math.min(width, height) - 40;
      const h = size * Math.sqrt(3) / 2;
      const x1 = cx;
      const y1 = cy - h / 2;
      const x2 = cx - size / 2;
      const y2 = cy + h / 2;
      const x3 = cx + size / 2;
      const y3 = cy + h / 2;

      svg += `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" 
              fill="none" stroke="${this.colors.secondary}" stroke-width="3"/>`;

      // Angle arc
      if (showAngles) {
        svg += `<path d="M ${x2 + 30} ${y2 - 15} A 25 25 0 0 1 ${x3 - 10} ${y2 - 20}" 
                fill="none" stroke="${this.colors.warning}" stroke-width="2"/>`;
        svg += `<text x="${x2 + 40}" y="${y2 - 10}" font-family="Inter, sans-serif" 
                font-size="12" fill="${this.colors.warning}">60°</text>`;
      }
    } else if (type === 'rectangle') {
      const w = size = 120;
      const h = 80;
      const x = cx - w / 2;
      const y = cy - h / 2;

      svg += `<rect x="${x}" y="${y}" width="${w}" height="${h}" 
              fill="none" stroke="${this.colors.secondary}" stroke-width="3"/>`;
      
      if (showAngles) {
        // Right angle markers
        svg += `<path d="M ${x + 15} ${y + h - 10} L ${x + 15} ${y + h} L ${x + 10} ${y + h}" 
                fill="none" stroke="${this.colors.warning}" stroke-width="2"/>`;
      }
    } else if (type === 'circle') {
      const r = 60;
      svg += `<circle cx="${cx}" cy="${cy}" r="${r}" 
              fill="none" stroke="${this.colors.secondary}" stroke-width="3"/>`;
      svg += `<line x1="${cx}" y1="${cy - r}" x2="${cx}" y2="${cy + r}" 
              stroke="${this.colors.grid}" stroke-width="1" stroke-dasharray="4"/>`;
      svg += `<line x1="${cx - r}" y1="${cy}" x2="${cx + r}" y2="${cy}" 
              stroke="${this.colors.grid}" stroke-width="1" stroke-dasharray="4"/>`;
      
      if (showAngles) {
        svg += `<path d="M ${cx + 40} ${cy}" A 40 40 0 0 1 ${cx} ${cy + 40}" 
                fill="none" stroke="${this.colors.warning}" stroke-width="2"/>`;
      }
    }

    svg += '</svg>';
    return svg;
  }

  // ==================== PARSE VISUAL REQUESTS ====================
  
  /**
   * Parse visual request string and generate appropriate SVG
   */
  generateFromRequest(request) {
    const [type, description] = request.split(':');
    
    switch (type.toLowerCase()) {
      case 'number_line':
        return this.generateNumberLineFromDesc(description);
      case 'fraction_bar':
        return this.generateFractionBarFromDesc(description);
      case 'area_model':
        return this.generateAreaModelFromDesc(description);
      case 'vertical_addition':
        return this.createVerticalCalculation({ operation: 'add', ...this.parseNumbers(description) });
      case 'vertical_subtraction':
        return this.createVerticalCalculation({ operation: 'sub', ...this.parseNumbers(description) });
      case 'vertical_multiplication':
        return this.createVerticalCalculation({ operation: 'mul', ...this.parseNumbers(description) });
      case 'vertical_division':
        return this.createVerticalCalculation({ operation: 'div', ...this.parseNumbers(description) });
      default:
        return null;
    }
  }

  generateNumberLineFromDesc(desc) {
    // Format: "0_to_1_with_marks_at_0.25_0.5_0.75" or "0_to_10_with_5_at_2"
    const match = desc.match(/(\d+)_to_(\d+)(?:_with_marks_at_([\d.,_]+))?/);
    if (!match) return this.createNumberLine();
    
    const start = parseInt(match[1]);
    const end = parseInt(match[2]);
    const marksStr = match[3];
    const marks = marksStr 
      ? marksStr.split('_').map((m, i) => ({ position: parseFloat(m), label: m, color: this.colors.highlight }))
      : [];
    
    return this.createNumberLine({ start, end, marks });
  }

  generateFractionBarFromDesc(desc) {
    // Format: "pie_split_into_8_with_3_shaded" or "rect_3_out_of_4"
    const rectMatch = desc.match(/rect_(\d+)_out_of_(\d+)/);
    if (rectMatch) {
      return this.createFractionBar({ numerator: parseInt(rectMatch[1]), denominator: parseInt(rectMatch[2]), shape: 'rectangle' });
    }
    
    const match = desc.match(/_split_into_(\d+)_with_(\d+)_shaded/);
    if (match) {
      return this.createFractionBar({ numerator: parseInt(match[2]), denominator: parseInt(match[1]), shape: 'circle' });
    }
    
    return this.createFractionBar();
  }

  generateAreaModelFromDesc(desc) {
    // Format: "3x4_grid_with_6_cells_shaded"
    const match = desc.match(/(\d+)x(\d+)_grid_with_(\d+)_cells_shaded/);
    if (match) {
      return this.createAreaModel({ 
        rows: parseInt(match[1]), 
        cols: parseInt(match[2]),
        shadedRows: Math.ceil(Math.sqrt(parseInt(match[3]))),
        shadedCols: Math.ceil(Math.sqrt(parseInt(match[3]))),
      });
    }
    
    return this.createAreaModel();
  }

  parseNumbers(desc) {
    // Extract numbers from description like "356+478" or "7346_divided_by_23"
    const addMatch = desc.match(/(\d+)[+＋](\d+)/);
    if (addMatch) return { num1: parseInt(addMatch[1]), num2: parseInt(addMatch[2]) };
    
    const subMatch = desc.match(/(\d+)[-－](\d+)/);
    if (subMatch) return { num1: parseInt(subMatch[1]), num2: parseInt(subMatch[2]) };
    
    const mulMatch = desc.match(/(\d+)[x×*](\d+)/);
    if (mulMatch) return { num1: parseInt(mulMatch[1]), num2: parseInt(mulMatch[2]) };
    
    const divMatch = desc.match(/(\d+)[÷/](\d+)/);
    if (divMatch) return { num1: parseInt(divMatch[1]), num2: parseInt(divMatch[2]) };
    
    return { num1: 0, num2: 0 };
  }
}

export default MathVisualizer;