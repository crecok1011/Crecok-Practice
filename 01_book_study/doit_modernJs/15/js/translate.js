const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(10, 10, 100, 100);

ctx.save();
ctx.translate(150, 150);

ctx.fillStyle = "#222";
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 80, 20);
ctx.restore();