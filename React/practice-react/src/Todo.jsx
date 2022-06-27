import React, { useState } from 'react';
import styled from 'styled-components';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    setId(id + 1);
    setTodos([...todos, { id: id, todo: todo }]);
    setTodo('');
  };

  const delTodo = (e) => {
    setTodos(
      todos.filter((todo) => todo.id !== Number(e.target.parentNode.id))
    );
  };

  const getTodo = (e) => {
    setTodo(e.target.value);
  };

  const keyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <Wrapper>
      <Container>
        <InputBox>
          <TodoInput
            type={'text'}
            placeholder="할일을 입력하세요."
            onChange={getTodo}
            value={todo}
            onKeyDown={keyDown}
          />
          <AddButton onClick={addTodo}>추가</AddButton>
        </InputBox>
        <div>
          <h1>Todo List</h1>
          {todos &&
            todos.map((list) => (
              <TodoListItem key={list.id} id={list.id}>
                <span>{list.todo}</span>
                <DelButton onClick={delTodo}>삭제</DelButton>
              </TodoListItem>
            ))}
        </div>
      </Container>
    </Wrapper>
  );
}

export default Todo;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 500px;
  height: fit-content;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

const TodoInput = styled.input`
  width: 400px;
  padding: 0;
  padding-left: 5px;
  border: 3px solid #59a4e5;
  &:focus {
    outline: none;
  }
`;

const AddButton = styled.div`
  width: 60px;
  background-color: #59a4e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    width: 54px;
    background-color: white;
    color: #59a4e5;
    border: 3px solid #59a4e5;
  }
`;

const TodoListItem = styled.div`
  width: 486px;
  height: 60px;
  padding: 10px 5px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #59a4e5;
`;

const DelButton = styled(AddButton)`
  background-color: white;
  border: 3px solid #59a4e5;
  color: #59a4e5;
  &:hover {
    width: 60px;
    background-color: #59a4e5;
    color: white;
  }
`;
