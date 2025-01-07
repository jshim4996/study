const a = true;

// ES 모듈은 if 안에서 import 불가능하다.
if (a) {
  //   import "./func.mjs"; => error 발생
  // 다이나믹 임포트를 원할경우 await 사용
  // async 없이도 await 사용 가능 => Commonjs 사용 불가능
  // export default 를 imoport 할 경우 default 속성 이름으로 import 됨 => Commonjs 동일
  const m1 = await import("./func.mjs");
  console.log(m1);
  const m2 = await import("./var.mjs");
  console.log(m2);
}
console.log("성공");
