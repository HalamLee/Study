import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import ColorList from './ColorList';

function Color() {
  const [colors, setColors] = useState([]);
  const tempData = [];

  const getColors = () => {
    for (let i = 0; i < 5; i++) {
      const randomRGB = [];
      const randomOneColor = [];
      for (let j = 0; j < 3; j++) {
        const randomNum = Math.floor(Math.random() * 256);
        randomOneColor.push(randomNum);
      }
      randomRGB.push([randomOneColor]);
      const url = `https://www.thecolorapi.com/id?rgb=rgb(${randomRGB})`;
      axios.get(url).then((res) => {
        tempData.push({
          colorCode: res.data.hex.value,
          colorName: res.data.name.value,
        });
      });
    }
    setColors(tempData);
    console.log('colors :>> ', colors);
    colors.map((color) => console.log('color.colorCode', color.colorCode));
  };

  return (
    <Wrapper>
      <Container>
        {/* {colors}
        {colors.map((color) => (
          <div>{color.colorCode}</div>
        ))} */}
        {/* <ColorList colors={colors} /> */}
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

const ColorList = styled.div`
  width: 100px;
  height: 150px;
  background-color: yellow;
`;

const Button = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
