const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(250, 125);
ctx.lineTo(110, 390);
ctx.lineTo(390, 210);
ctx.lineTo(90, 210);
ctx.lineTo(330, 390);
ctx.closePath();

ctx.strokeStyle = "pink";
ctx.stroke();

ctx.fillStyle = "yellow";
ctx.fill();