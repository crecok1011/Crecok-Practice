function whatsYourFavorite() {
  let fav = "Javascript";
  return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
  return new Promise((resolve, rejecvt) => { resolve(`Hello, ${subject}`); });
}

whatsYourFavorite()
.then(displaySubject)
.then(console.log);