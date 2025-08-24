# Experiment 6 – Interactive SVG Drawing Tool with Mouse Event Handlers

## 🎯 Objective
To design and build a web-based drawing tool using **SVG** where users can draw freehand paths interactively with the mouse. The experiment strengthens concepts of JavaScript DOM manipulation, SVG element creation, and mouse event handling.

---

## 🛠️ Key Components

### HTML
- `<svg id="drawingArea">` – Drawing canvas where shapes are created.
- `<h2>` – Title heading.

### CSS
- **Centered layout** with margin and text alignment.
- **SVG area styled** with border, background, and crosshair cursor.

### JavaScript
- **Events used:**
  - `mousedown` → Start drawing.
  - `mousemove` → Extend the current path.
  - `mouseup` / `mouseleave` → Stop drawing.
- **SVG element creation:** `document.createElementNS("http://www.w3.org/2000/svg", "path")`
- **Path update:** Coordinates appended dynamically with `"L x y"`.

---

## 🔄 Interactive Flow
1. **Click inside SVG** → New path starts from click point.  
2. **Drag mouse** → Path extends following cursor.  
3. **Release mouse** → Drawing stops.  
4. **Repeat action** → Multiple paths can be drawn.  

---

## ✅ Valid & Invalid Cases
- **Valid:** Drawing inside the SVG → Paths created properly.  
- **Invalid:** Drawing outside SVG → Prevented using `mouseleave` event.  

---

## 📚 Learning Outcomes
- Learned **how to handle mouse events (mousedown, mousemove, mouseup, mouseleave)**.  
- Practiced **real-time DOM updates** by creating and modifying SVG elements dynamically.  
- Understood the use of **`createElementNS`** for SVG element creation.  
- Designed a simple **freehand drawing tool** without reloading the page.  

---
