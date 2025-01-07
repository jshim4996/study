// commonJs 표준 자바스크립트 모듈은 아니지만 노드 생테계에서 가장 널리 사용됨
// 표준 제시 이전부터 사용됨

const { odd, even } = require("./var");
const checkOddOrEven = require("./func");

function stringCheckOddOrEven(str) {
  return str.length % 2 ? odd : even;
}

console.log(checkOddOrEven(3));
console.log(stringCheckOddOrEven("str"));
