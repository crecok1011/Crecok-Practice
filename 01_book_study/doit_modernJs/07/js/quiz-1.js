const inputName = document.querySelector("#username");
const inputMajor = document.querySelector("#major");
const addButton = document.querySelector("button");
const tbody = document.querySelector("tbody");

addButton.addEventListener("click", function(e) {
  e.preventDefault();
  const addTr = document.createElement("tr");
  const nameTd = document.createElement("td");
  const majorTd = document.createElement("td");

  nameTd.innerText = inputName.value;
  majorTd.innerText = inputMajor.value;

  addTr.appendChild(nameTd);
  addTr.appendChild(majorTd);
  tbody.appendChild(addTr);

  inputName.value = "";
  inputMajor.value = "";
});