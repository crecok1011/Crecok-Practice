function hello() {
  return "안녕하세요.";
}

function bye() {
  return "안녕히 가세요.";
}

function userCheck(name, fn) {
  console.log(`${name}님, ${fn()}`);
}

userCheck("강경원", hello);
userCheck("강경원", bye);