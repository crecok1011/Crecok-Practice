
document.addEventListener('DOMContentLoaded', function() {
  const createButton = document.querySelector('.createTableButton');
  const setTable = document.querySelector('#tableSection');
  const inputRow = document.querySelector('#inputRow');
  const inputColumn = document.querySelector('#inputColumn');

  createButton.addEventListener('click', function(event) {
    event.preventDefault();
    const existingTable = document.querySelector('table');
    if (existingTable) {
      existingTable.remove();
    }
    const table = document.createElement('table');
    
    // 테이블 행 생성 + 테이블에 붙이기
    for(let i=0; i<inputRow.value; i++) {
      let tableRow = document.createElement('tr');
      // 테이블 열 생성 + 테이블에 붙이기
      for(let j=0; j<inputColumn.value; j++) {
        const textNode = document.createTextNode(`${i}, ${j}`);
        let tableColumn = document.createElement('td');
        tableColumn.appendChild(textNode);
        tableRow.appendChild(tableColumn);
      }
      table.appendChild(tableRow);
    }
    // 테이블을 div 영역에 붙이기
    setTable.appendChild(table);
  });
});