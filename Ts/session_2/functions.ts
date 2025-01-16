function add(n1: number, n2: number) {
  return n1 + n2;
}

function VoidFun(n1: number, n2: number): void {
  n1 + n2;
} // void 타입은 반환을 하지 없는 함수지만 실제 함수 실행을 하면 udnefined 를 반환한다.

function undefinedFun(n1: number, n2: number): undefined {
  n1 + n2;
  return;
} // undefined 타입은 반환값이 없는 함수이며 반환값은 undefined 이다.

console.log(add(1, 2));

console.log(VoidFun(1, 2));

console.log(undefinedFun(1, 2));

let newFn: (a: number, b: number) => number;

// newFn = VoidFun;

// console.log(newFn(1, 2));

const addAndHandle = (n1: number, n2: number, cb: (result: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

// console.log(addAndHandle(1,2, () => ));
addAndHandle(7, 8, (result) => {
  console.log(result);
  return result;
}); // => 콜백 함수에 타입이 다르더라도 오류가 발생하지 않는다.
// 콜백함수를 포함할경우 매개변수에 는 엄격하더라도 콜백함수에 return 값은엄격하지 않다.
// 이유는 함수의 매개 변수는 해당 함수에서의 실행 이지만 콜백함수 return 경우 콜백함수의 실행 이기 때문이다.
