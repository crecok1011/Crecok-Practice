const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "images/pattern.png";

img.onload = function() {
  let pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 200, 200);
}