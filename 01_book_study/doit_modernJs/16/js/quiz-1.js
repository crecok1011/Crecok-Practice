const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function Square(x, y, dx, dy, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.color = color;

  this.drawSquare = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.dx, this.dy);
  }
}

const sqr1 = new Square(10, 10, 100, 100, "yellow");
const sqr2 = new Square(30, 30, 50, 50, "red");

sqr1.drawSquare();
sqr2.drawSquare();