function randomColor(number) {
  return Math.floor(Math.random() * number);
}
function changeColor() {
  let changeColorCode = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
  document.body.style.backgroundColor = changeColorCode;
}

changeColor();
