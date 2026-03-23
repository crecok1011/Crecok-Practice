let inputInch = parseFloat(prompt("인치 값을 입력하세요."));
let cm = (inputInch * 2.54).toFixed(1);
alert(`${inputInch}인치는 ${cm}cm 입니다.`);