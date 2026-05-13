const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
ctx.arc(280, 100, 50, 0, (Math.PI / 180) * 180, false);
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
ctx.stroke();