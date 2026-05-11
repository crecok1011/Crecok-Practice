fetch('student-2.json')              // json 파일을 읽어온다.
.then(response => response.json())   // 프로미스는 resolve 값으로 Response 객체를 반환하고 json() 메서드로 객체로 변환한다.
.then(json => {                      // 프로미스는 revolve 값으로 객체를 반환하고 그 목록들의 이름을 json으로 지정한다.
  let output = "";
  json.forEach(student => {
    output += `
      <h2>${student.name}</h2>
      <ul>
        <li>전공 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
      </ul>
      <hr>
    `;
  });
  document.querySelector('#result').innerHTML = output;
})
.catch(error => console.log(err));