// 버튼 DOM
const bttn = document.querySelector("#bttn");

// p태그 DOM
const current = document.querySelector("#current");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");

// 입력폼 DOM
const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;

bttn.addEventListener("click", function() {
  const birthDay = new Date(`${birthYear.value}-${birthMonth.value - 1}-${birthDate.value}`);

  let passed = today.getTime() - birthDay.getTime();
  let passedDays = Math.floor(passed / (1000 * 60 * 60 * 24));
  let passedHours = Math.floor(passed / (1000 * 60 * 60));

  days.innerText = `날짜로는 ${passedDays} 일이 흐르고,`
  hours.innerText = `시간으로는 ${passedHours} 시간이 흘렀습니다.`;

  birthYear.value = "";
  birthMonth.value = "";
  birthDate.value = "";
});