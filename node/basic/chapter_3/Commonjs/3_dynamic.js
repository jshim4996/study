const a = false;

// require("./func") 실행 안됨
// 조건부로 모듈을 불러오는것을 다이나믹 임포트라고 한다.
if (a) {
  require("./func");
}
console.log("성공");
