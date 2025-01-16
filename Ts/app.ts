let userInput: unknown;
let userName: string;

userInput = "joon";

// 'unknown' 타입은 'string' 타입에 할당할 수 없습니다. - 발생
// userName = userInput;

if (typeof userInput === "string") {
  userName = userInput;
}

// 반환하는 타입이 절대 없을 경우
// => error 처럼 오류를 발생시켜 중간에 throw 형태로 절대 반환값이 없을때 좀더 명시적으로 알려주기 위해 never 타입을 사용한다.
// => void 는 중간에 코드가 중지 되는것이 아닌 모든 함수의 작동을하되 반환값이 없다는 형태이다.
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError("An error occurred", 500);
