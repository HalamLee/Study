import React, { useState } from 'react';
import styled from 'styled-components';

function Counter() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <ButtonBox>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>
      </ButtonBox>
      <Box>Count: {count}</Box>
    </>
  );
}

export default Counter;

const ButtonBox = styled.div`
  width: 300px;
  height: fit-content;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 150px;
  height: 200px;
  text-align: center;
  background-color: palevioletred;
`;
