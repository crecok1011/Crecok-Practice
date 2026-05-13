const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.scale(0.7, 1);
ctx.arc(200, 150, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();