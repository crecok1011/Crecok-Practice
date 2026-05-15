const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "images/cat.jpg";
img.onload = function() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

ctx.beginPath();
ctx.ellipse(250, 200, 140, 180, 0, 0, Math.PI * 2);
ctx.clip();