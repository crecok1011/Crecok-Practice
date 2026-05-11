fetch('https://dummyjson.com/quotes')
.then(response => response.json())
.then(quotes => displayQuote(quotes));

function displayQuote(obj) {
  const showQuote = document.querySelector(".quote");
  const showAuthor = document.querySelector(".author");

  let ranNum = (Math.floor(Math.random() * 30));

  console.log(obj.quotes);
  obj.quotes.forEach(quote => {
    showQuote.innerText = `${obj.quotes[ranNum].quote}`;
    showAuthor.innerText = `${obj.quotes[ranNum].author}`;
  });
}
