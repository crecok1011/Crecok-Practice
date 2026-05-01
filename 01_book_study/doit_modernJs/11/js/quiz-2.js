const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {

  let sixNum = new Set();
  while (sixNum.size < 6) {
    let ranNum = Math.floor(Math.random() * 45 + 1);
    sixNum.add(ranNum);
  }
  result.innerText = `${[...sixNum]}`;
});