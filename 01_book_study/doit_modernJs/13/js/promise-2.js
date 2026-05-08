let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다.");
  } else {
    reject("피자 주문을 실패했습니다.");
  }
});

// then(), catch(), finally()는 나중에 실행할 '함수'를 받는 메서드
pizza.then(
  result => console.log(result)
).catch(
  err => console.log(err)
).finally(
  () => console.log("완료")
);