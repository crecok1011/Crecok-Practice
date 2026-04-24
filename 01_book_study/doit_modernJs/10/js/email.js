const email = document.querySelector("#userEmail");
const button = document.querySelector("button");
const result = document.querySelector("#result");

// 이메일 주소의 사용자 이름 부분 세 글자만 표시하기
// button.addEventListener("click", function() {
//   let username, domain;

//   if(email.value !== "") {
//     username = email.value.split("@")[0];
//     username = username.substring(0, 3);
//     domain = email.value.split("@")[1];
//     result.innerText = `${username}...@${domain}`;
//     email.value = "";
//   }
// });

// 이메일 주소의 사용자 이름 부분 절반만 표시하기
button.addEventListener("click", function() {
  let username, domain, half;

  if(email.value !== "") {
    username = email.value.split("@")[0];
    half = username.length / 2;
    username = username.substring(0, (username.length - half));
    domain = email.value.split("@")[1];
    result.innerText = `${username}...@${domain}`;
    email.value = "";
  }
});