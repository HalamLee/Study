import React from 'react';
import styled from 'styled-components';

function TodoItem(props) {
  return <TodoItemBox>{props.item}</TodoItemBox>;
}

export default TodoItem;

const TodoItemBox = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid lightblue;
`;
