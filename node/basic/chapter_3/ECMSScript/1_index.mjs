// 공식적인 자바스크립트 모듈 형식
// 사용빈도가 전점 늘어나고 있음
// 확장자 .mjs 로 해야 모듈 실행됨
// 함수가 아닌 문법
// 확장자 생략 불가능
// CommonJS 나 ES 모듈 택일 하여 선택 하는것을 지향
import { odd, even } from "./var.mjs";
import checkOddOrEven from "./func.mjs";

function stringCheckOddOrEven(str) {
  return str.length % 2 ? odd : even;
}

console.log(checkOddOrEven(2));
console.log(stringCheckOddOrEven("str"));
