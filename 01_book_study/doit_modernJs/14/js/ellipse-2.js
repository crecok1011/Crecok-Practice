const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.scale(1, 0.7);
ctx.strokeStyle = "blue";

ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2);
ctx.stroke();

ctx.closePath();