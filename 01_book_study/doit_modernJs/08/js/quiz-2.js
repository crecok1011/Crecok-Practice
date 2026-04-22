const raffleBtn = document.querySelector("#raffle");
const seedInput = document.querySelector("#seed");
const totalInput = document.querySelector("#total");
const result = document.querySelector("#result");

raffleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let seedNum = seedInput.value;
  let totalNum = totalInput.value;
  let winnerStr = "";

  for(let i=0; i<totalNum; i++) {
    let winner = Math.floor(Math.random() * seedNum + 1);
    winnerStr += `${winner}번, `;
  }
  
  result.innerText = `당첨자 : ${winnerStr}`;
  result.classList.add("show");
});