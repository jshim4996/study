import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./componets/Header/Header.jsx";
import CoreConcepts from "./componets/CoreConcepts.jsx";
import TabButton from "./componets/TabButton.jsx";

function App() {
  const [selectTopic, setSelectTopic] = useState();

  // let tabContent = "Please Click on the Tab";

  function handleSelect(selectButton) {
    // tabContent = selectButton;
    setSelectTopic(selectButton);
    // console.log(selectButton);
  }

  // 다양한 방법으로 화면 데이터를 동적으로 표시 할 수 있다.
  let tabContent = <p>plase select a topic</p>;
  if (selectTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectTopic].code}</code>
        </pre>
      </div>
    );
  }

  console.log("app 실행 됨");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((x) => (
              <CoreConcepts key={x.title} {...x}></CoreConcepts>
            ))}
            {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Ex</h2>
          <menu>
            <TabButton
              isSelected={"components" === selectTopic}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={"jsx" === selectTopic}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={"props" === selectTopic}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={"state" === selectTopic}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {selectTopic}
        </section>
        {/* {!selectTopic ? (
          <p>plase select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectTopic].code}</code>
            </pre>
          </div>
        )} */}
        {/* {!selectTopic && <p>plase select a topic</p>}
        {selectTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectTopic].code}</code>
            </pre>
          </div>
        )} */}
        {tabContent}
      </main>
    </div>
  );
}

export default App;
