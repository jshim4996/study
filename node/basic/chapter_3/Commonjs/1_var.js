const odd = "CJS 홀수입니다.";
const even = "CJS 짝수입니다.";

module.exports = {
  odd,
  even,
};

// 아래와 같이 exprots 만 사요 가능
// 실제 콘솔에 module.exports 와 exprots 같은 걸로 찍힘
// exports 는 객체만 가능 함수 x
// expots (참조)=> module.exports (참조) => {}
exports.odd = "CJS 홀수입니다.";
exports.even = "CJS 짝수입니다.";
