const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.quadraticCurveTo(200, 50, 350, 200);
ctx.stroke();