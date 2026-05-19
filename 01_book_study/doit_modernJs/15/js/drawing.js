const canvas = document.querySelector("canvas");
const toolbar = document.querySelector("#toolbar");
const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

let isDrawing = false;
let startX;
let startY;
let lineWidth = 2;

toolbar.addEventListener("change", e => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lwidth") {
    lineWidth = e.target.value;
  }
});

toolbar.addEventListener("click", e => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mousemove", e => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});