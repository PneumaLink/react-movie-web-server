import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  const onReset = () => {
    setToDos([]);
  };

  const addToDos = (currentArray) => [toDo, ...currentArray];

  function onSubmit(event) {
    //  .preventDefault()
    //  조건에 따라 특정 동작을 하게 하고싶지 않을때 사용
    //  특히 form에서 사용할 경우 값은 정상적으로 전달되지만, 창이 새로고침되는 기능을 막는다.
    //  a에서는 하이퍼링크의 동작을 막는다.
    event.preventDefault();

    if (toDo === "") {
      return;
    }
    setToDos(addToDos);
    setToDo("");
  }

  const deleteElement = (event) => {
    const li = event.target.parentElement;
    li.remove();
  };

  const deleteIndex = (index) => {
    setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex));
  };

  return (
    <div>
      <h1>My To Do! : ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="..."
        ></input>
        <button>Add To Do</button>
      </form>
      <button onClick={onReset}>ReSet</button>

      {/* 부모 원소를 제거하는 방식 - 배열 본채는 보존 */}
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={deleteElement}>❌</button>
          </li>
        ))}
      </ul>

      {/* 배열의 인덱스 제거 */}
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteIndex(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
