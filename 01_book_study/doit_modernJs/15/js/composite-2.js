const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(100, 50, 100, 100);
ctx.strokeRect(100, 50, 100, 100);

ctx.globalCompositeOperation = "copy";

ctx.fillStyle = "#222";
ctx.arc(180, 130, 50, 0, Math.PI * 2, false);
ctx.fill();