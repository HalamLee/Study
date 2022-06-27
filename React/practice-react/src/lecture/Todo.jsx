// https://youtu.be/TjUju3aUIDM

// 1. 인풋창이 있고 버튼이 있다.
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다.
// 3. 아이템 삭제 버튼을 누르면 삭제가 가능하다.

import React, { useState } from 'react';
import TodoBoard from './components/TodoBoard';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]); // 기존에 저장했던 투두리스트와 새로운 투두리스트
  };

  return (
    <>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
    </>
  );
}

export default Todo;
