const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circle = {
  x : 100,
  y : 100,
  radius : 30,
  dx : 4,
  dy : 4,
  color : "#222"
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
}

function move() {
  drawCircle();
  circle.x += circle.dx;
  requestAnimationFrame(move);
}

move();