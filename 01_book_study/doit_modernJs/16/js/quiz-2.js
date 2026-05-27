const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Square(x, y, swidth, sheight, color) {
  this.x = x;
  this.y = y;
  this.swidth = swidth;
  this.sheight = sheight;
  this.color = color;

  this.dx = (Math.random() * 10) + 1;
  this.dy = (Math.random() * 10) + 1;

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.swidth, this.sheight);
  }

  this.animate = function() {
    this.x += this.dx;
    this.y += this.dy;
    if(this.x + this.swidth > canvas.width || this.x < 0) {
      this.dx = -this.dx;
    }
    if(this.y + this.sheight > canvas.height || this.y < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  }
}

const sqr1 = new Square(10, 10, 100, 100, "yellow");
const sqr2 = new Square(30, 30, 50, 50, "red");

function move() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sqr1.animate();
  sqr2.animate();
  requestAnimationFrame(move);
}

move();