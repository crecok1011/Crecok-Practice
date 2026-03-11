let pics = document.querySelectorAll('.pic');
let lightbox = document.querySelector('.lightbox');
let bigImg = document.querySelector('.bigImg');

for(let i=0; i<pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

lightbox.onclick = function() {
  lightbox.style.display = "none";
}

function showLightbox() {
  let bigLocation = this.dataset.src;
  bigImg.src = bigLocation;
  lightbox.style.display = "block";
}