import React, { useState } from 'react';
import styled from 'styled-components';

function Counter() {
  const [count, setCount] = useState(0);

  const increaseOne = () => {
    setCount(count + 1);
  };

  const increaseTwo = () => {
    setCount(count + 2);
  };

  const decreaseOne = () => {
    setCount(count - 1);
  };

  const decreaseTwo = () => {
    setCount(count - 2);
  };

  return (
    <Wrapper>
      <Container>
        <Button onClick={decreaseTwo}>-2</Button>
        <Button onClick={decreaseOne}>-1</Button>
        <h1>{count}</h1>
        <Button onClick={increaseOne}>+1</Button>
        <Button onClick={increaseTwo}>+2</Button>
      </Container>
    </Wrapper>
  );
}

export default Counter;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Center)`
  width: 100vw;
  height: 100vh;
`;

const Container = styled(Center)`
  width: 400px;
  height: 400px;
  border: 5px solid #32619bed;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
