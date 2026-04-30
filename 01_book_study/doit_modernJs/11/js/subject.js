const result = document.querySelector("#result");

const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "자바스크립트", "리액트"];
const member3 = ["자바스크립트", "타입스크립트"];

const totalSubject = [...member1, ...member2, ...member3];

let setSubjects = new Set(totalSubject);

let resultText = "";
for(let subject of setSubjects.values()) {
  resultText += `<li>${subject}</li>`
}

result.innerHTML = `<ul>${resultText}</ul>`;