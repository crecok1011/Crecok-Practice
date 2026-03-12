
const addButton = document.querySelector('button');

document.addEventListener('DOMContentLoaded', () => {
  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const inputBook = document.querySelector('#inputBook'); // 텍스트 필드 요소 접근
    const bookList = document.querySelector('.bookList'); // ul 요소 접근
    
    const addList = document.createElement('li'); // li 요소 노드 추가
    const bookNameText = document.createTextNode(inputBook.value); // 텍스트 필드의 값을 텍스트 노드로 추가
    
    addList.appendChild(bookNameText); // li 요소에 텍스트 노드를 자식으로 연결
    bookList.insertBefore(addList, bookList.childNodes[0]); // ul 요소 자식으로 추가한 li 노드 연결
    
    inputBook.value = "";
  });
});

const bookList = document.querySelector('.bookList'); // ul 요소 접근
bookList.addEventListener('click', (event) => {
  if(event.target.tagName === "LI") {
    if(confirm('삭제하시겠습니까?')) {
      event.target.remove();
    }
  }
});
