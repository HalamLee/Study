import React, { useState } from 'react';
import styled from 'styled-components';
import ColorList from './ColorList';

function Color() {
  const [colors, setColors] = useState([]);
  const getColors = () => {
    for (let i = 0; i < 5; i++) {
      setColors(Math.floor(Math.random() * 1001));
    }
    console.log(colors);
  };

  return (
    <Wrapper>
      <Container>
        <ColorList color={'0,32,171'} />
        <Button onClick={getColors}>Get Colors</Button>
      </Container>
    </Wrapper>
  );
}

export default Color;

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
  flex-direction: column;
`;

const Button = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
