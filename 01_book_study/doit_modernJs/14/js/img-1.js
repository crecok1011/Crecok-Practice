const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "images/cat.jpg";
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}