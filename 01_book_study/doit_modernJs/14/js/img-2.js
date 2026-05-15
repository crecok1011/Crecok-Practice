const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "images/cat.jpg";
img.onload = function() {
  ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
}