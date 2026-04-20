const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

// 노드 추가 및 연결을 통해 영역에 P 태그 추가
orderButton.addEventListener("click", () => {
  let newP = document.createElement("p");
  let textNode = document.createTextNode(title.innerText);
  newP.appendChild(textNode);
  newP.style.fontSize = "0.8em";
  newP.style.color = "blue";
  orderInfo.appendChild(newP);
}, {once : true});