const container = document.querySelector("#container");

// 이미지 배열 (자바스크립트에서만 다룰 수 있게 배열로 설정)
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg", "pic-5.jpg"];

// 첫 번째 이미지를 기본으로 표시
container.style.backgroundImage = `url(../images/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    }
    else if(e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.backgroundImage = `url(../images/${pics[i]})`;
  });
});