const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.strokeStyle = "blue";
ctx.fillRect(10, 10, 200, 100);
ctx.strokeRect(10, 10, 200, 100);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(50, 50, 120, 100);

ctx.clearRect(70, 80, 80, 45);