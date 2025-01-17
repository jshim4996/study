## 유데미 React 완벽 가이드 2025 section 2

### 2025-01-02 시작

- 컴포넌트로 인식 되기 위해서는 함수의 명칭이 대문자로 시작해야 한다.
- JSX 는 자바스크립트 문법 확장자를 의미합니다.
  - 자바스크립트 소스안에 HTML 마크업 코드를 작성할수 있게 해줍니다.
  - 브라우저에서 지원되지 않는 파일 확장자입니다
  - 개발 서버가 실행될 때 백그라운드에서 실행되는 빌드 프로세스에게 해당 파일이 JSX 코드를 포함하고 있다는 것을 알려줍니다
  - 브라우저나 "표준 자바스크립트"와는 무관하며, 단순히 선택한 프로젝트 설정의 코드 빌드 프로세스의 요구 사항에 의존합니다.
  - 중괄호 사이에 원하는 자바스크립트 코드를 입력하여 동적으로 데이터를 사용할수 있다.
  - porps 를 통해 component 에 데이터를 전달할수 있다.
  - props 로 전달하려는 데이터와 전달 받은 component object 값이 같을 경우 스프레드 문법으로 전달할수 있다.  
    -ex: <CoreConcepts {...CORE_CONCEPTS[0]} />
  - 컴포넌트의 props는 구조 할당 형태로 값을 받을수 있다.
    - ex : function 컴포넌트({파라메터, 파라메터}){ return (<div></div>)}
  - jsx {} 사이에는 자바스크립트 표현문 많이 사용할수 있다.
  - React 에서 컴포넌트 별 css 적용을 위해선 import 문을 사용하여 css 파일을 임포트 한다.
  - 특정 컴포넌트에 css 를 임포트 하면 다른 컴포넌트 동일조건 태그에 css 가 적용된다. => 이를 방지 할수 있는 방법 있음
  - 컴포넌트에 children 이라는 파라메터가 있으면 컴포넌트 사이에 값을 전달 받을수 있다.
    - ex : <TabButton>test</TabButton>
  - 컴포넌트 children 속성으로 컴포넌트를 받는 것을 컴포넌트 합성이라고 한다.
  - 컴포넌트 합성을 통해 컴포넌트 재사용성을 높일수 있다.
  - 컴포넌트에 event에 함수는 () 를 생략 한다.
    - ex : <button onClick={handleClick}>test</button>
  - 리액트는 컴포넌트 함수를 코드 내에서 처음 발견했을때 한번만 실행 한다.\
  - reactHook 는 컴포넌트 함수 안 또는 커스텀 hook 안에서만 호출 해야한다. => 함수 내부 함수에서 호출 하면 오류
  - useState 는 리액트 hook 으로서 저장된 값의 변경이 있을경우 컴포넌트를 재실행 한다. => 값과 값을 변환할 함수를 재공
    ex : const [selectTopic, setSelectTopic] = useState("Please Click on the Tab");
  - jsx 에서 class 대신 className 을 사용한다.
  - jsx 에서 className 은 동적으로 사용 할 수 있다.
  - jsx 에서는 배열을 사용할 수 있다.
  - jsx 내부에서 map 함수를 사용하여 반복적인 component 동일하게 출력 할 수 있다.
  - jsx 반복문에 key를 설정하지 않을경우 화면에서 오류가 발생 한다.
