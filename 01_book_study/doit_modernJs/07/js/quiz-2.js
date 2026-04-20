const bttn = document.querySelector("#bttn");
const notiBox = document.querySelector("#noti-box");

bttn.addEventListener("click", function() {
  let newDiv = document.createElement("div");
  newDiv.innerText = "알림 내용이 표시됩니다";
  newDiv.classList.add("noti");
  notiBox.appendChild(newDiv);
  setTimeout(() => {
    newDiv.remove();
  }, 3000);
});