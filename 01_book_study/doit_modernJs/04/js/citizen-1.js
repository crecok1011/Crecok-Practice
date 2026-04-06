let add = (num1, num2) => num1 + num2;
let sum = add; // add 뒤에 소괄호를 붙이지 않는다. 소괄호는 함수의 실행을 의미하기 때문이다.
console.log(sum(2, 10));