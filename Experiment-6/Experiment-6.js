const svg = document.getElementById("drawingArea");
let drawing = false;
let currentPath = null;

// Mouse down → start freehand path
svg.addEventListener("mousedown", (e) => {
  drawing = true;

  const startX = e.offsetX;
  const startY = e.offsetY;

  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("d", `M ${startX} ${startY}`);
  currentPath.setAttribute("stroke", "blue");
  currentPath.setAttribute("stroke-width", "2");
  currentPath.setAttribute("fill", "none");

  svg.appendChild(currentPath);
});

// Mouse move → extend path
svg.addEventListener("mousemove", (e) => {
  if (drawing && currentPath) {
    const x = e.offsetX;
    const y = e.offsetY;

    let d = currentPath.getAttribute("d");
    d += ` L ${x} ${y}`;
    currentPath.setAttribute("d", d);
  }
});

// Mouse up → stop drawing
svg.addEventListener("mouseup", () => {
  drawing = false;
  currentPath = null;
});

// Prevent drawing outside SVG
svg.addEventListener("mouseleave", () => {
  drawing = false;
  currentPath = null;
});
