const button = document.querySelector("button");
const result = document.querySelector("#result");
const userNum = document.querySelector("#user-number");

button.addEventListener("click", () => {
  try {
    if(userNum.value < 10) {
      result.innerText = `${userNum.value}`;
    } else if(userNum.value > 10) {
      throw "10보다 작은 수를 입력하세요."
    } else if (userNum.value === null || isNaN(userNum.value)) {
      throw "숫자를 입력하세요."
    }
  } catch(err) {
    alert(err);
  } finally {
    userNum.value = "";
  }
});
