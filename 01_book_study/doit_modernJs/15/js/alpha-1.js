const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.globalAlpha = 0.3;
ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(50, 50, 100, 50);
ctx.fillStyle = "rgb(0, 0, 200)";
ctx.fillRect(150, 50, 100, 50);
ctx.fillStyle = "rgb(0, 200, 0)";
ctx.fillRect(250, 50, 100, 50);
ctx.fillStyle = "rgb(200, 200, 0)";
ctx.fillRect(350, 50, 100, 50);