import Button from "./Button";
import { useState, useEffect } from "react";

function Hello() {
  function destroyedFn() {
    console.log("Dsetroy component");
  }

  function effectFn() {
    console.log("Create new component");
    return destroyedFn;
  }

  useEffect(effectFn, []);
  //  컴포넌트가 destroy될 때도 무언가 실행되게 할 수 있다.
  //  cleanup funtion 이라고 한다
  //  useEffect에 인자로 들어가는 함수에서 retrun되는 함수가 그 역할을 한다

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log("Call New Page");
  }, []);
  //  useEffact의 두 번째 인자로 들어가는 배열에는 변하를 감지할 State들을 넣어주 수 이쌌다.
  //  만약 배열안에 아무런 값도 없다면, 치초 한 번만 실행된다.
  //  단, 개발자 모드에선 2번 실행된다. 당황하지 말자

  useEffect(() => {
    console.log("Showing ", showing);
  }, [showing]);

  return (
    <div>
      <Button text={showing ? "Hide" : "Show"} event={onClick} />
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
