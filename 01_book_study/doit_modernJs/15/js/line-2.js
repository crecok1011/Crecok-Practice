const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const lineJoin = ["bevel", "miter", "round"];

ctx.strokeStyle = "#222";
for(let i=0; i<lineJoin.length; i++) {
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.stroke();
}