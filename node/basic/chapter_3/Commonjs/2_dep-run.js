// 모듈이 모듈을 참조 할 경우 순환 참조 라한다.
//  빈객체 생성 될수 있음

const dep1 = require("./dep1");
const dep2 = require("./dep2");

dep1();
dep2();
