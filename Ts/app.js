var userInput;
var userName;
userInput = "joon";
// 'unknown' 타입은 'string' 타입에 할당할 수 없습니다. - 발생
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred", 500);
