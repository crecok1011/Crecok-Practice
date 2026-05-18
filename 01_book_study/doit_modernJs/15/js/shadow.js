const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 15;
ctx.shadowBlur = 10;

let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.arc(100, 100, 80, 0, Math.PI * 2);
ctx.fillStyle = radGrad;
ctx.fill();
