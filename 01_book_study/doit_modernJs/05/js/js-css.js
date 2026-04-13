const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");

title.onclick = () => {
  title.style.backgroundColor = "black";
  title.style.color = "white";
}
userName.onclick = () => {
  userName.style.backgroundColor = "red";
  userName.style.color = "white";
}