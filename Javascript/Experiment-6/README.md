# Experiment 6 – Interactive Canvas Drawing Tool with Mouse Event Handlers

## 🎯 Objective
To design and build a web-based drawing tool using the **HTML `<canvas>` element** where users can draw freehand interactively with the mouse.  
This experiment strengthens concepts of the **Canvas API**, **JavaScript DOM manipulation**, and **event handling**.

---

## 🛠️ Key Components

### HTML
- `<canvas id="drawingArea">` – Canvas area where freehand strokes are made.
- `<h2>` – Title heading.

### CSS
- **Centered layout** with margin and text alignment.
- **Canvas area styled** with border, background, and crosshair cursor.

### JavaScript
- **Events used:**
  - `mousedown` → Start drawing and move to cursor position.
  - `mousemove` → Draw continuous lines following the cursor.
  - `mouseup` → Stop drawing.
  - `mouseleave` → Stop drawing when cursor leaves canvas.
- **Canvas API methods:**
  - `beginPath()` – Start new drawing path.
  - `moveTo(x, y)` – Move pointer to starting position.
  - `lineTo(x, y)` – Draw line to given coordinates.
  - `stroke()` – Render the line.

---

## 🔄 Interactive Flow
1. **Click inside Canvas** → Drawing starts from mouse position.  
2. **Drag mouse** → Line follows cursor creating freehand stroke.  
3. **Release mouse** → Drawing stops.  
4. **Repeat** → Multiple strokes can be drawn.  

---

## ✅ Valid & Invalid Cases
- **Valid:** Drawing inside the Canvas → Blue strokes appear properly.  
- **Invalid:** Cursor leaves Canvas → Drawing stops automatically due to `mouseleave` event.  

---

## 📚 Learning Outcomes
- Learned handling of **mouse events** (`mousedown`, `mousemove`, `mouseup`, `mouseleave`).  
- Practiced **Canvas API functions** (`beginPath`, `moveTo`, `lineTo`, `stroke`).  
- Understood difference between **pixel-based drawing (Canvas)** and **shape-based drawing (SVG)**.  
- Built a working **freehand drawing tool** in a browser.  

---

