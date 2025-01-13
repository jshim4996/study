# 유데미 타입스크립트 강의 정리

## 2025-01-10

### 섹션 1

- tsc 명령어로 타입스크립트 컴파일
- .ts 확장자를 사용

### 섹션 2

- javaScript 는 런타임 환경에서 타입을 검사한다.
- 타입스크립트는 컴파일 타임에 타입을 검사한다.
- 타입스크립트는 정적 타입 언어이다.
- 타입스크립트는 주요 원시 타입은 소문자이다.
- 컴파일된 파일과 ts 파일을 동시에 화면에 보여주면 ide 에서 중복 오류가 발생한다.
- 타입스크립트는 변수에 할당되는 데이터에 따라 변수 타입을 추론하여 자동으로 타입을 지정한다.
- 타입스크립트는 변수 할당시 지정된 값에따라 타입이 결정되며, 이후 해당 변수에 새로운 값을 저장 할 떄 타입이 다를 경우 오류가 발생한다.(타입 추론을 통해 타입이 지정됨)
- 만약 변수를 선언시 타입 지정과 값 할당 모두 하지 않으면 any 타입이 된다.