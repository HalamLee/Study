import React from 'react';
import styled from 'styled-components';

function ColorList(props) {
  console.log('props :>> ', props);
  console.log('props.colors :>> ', props.colors);
  console.log('props.colors.length :>> ', props.colors.length);
  console.log('typeof(props.colors) :>> ', typeof props.colors);

  return (
    <>
      {/* <ColorBox>{props.colors}</ColorBox>
      <div>{props.colors}</div> */}
      {props.colors.map((color, idx) => (
        <div key={idx}>
          <ColorBox color={props.colors.colorCode}>{color}</ColorBox>
          <div>ddd</div>
        </div>
      ))}
    </>
  );
}

export default ColorList;

const ColorBox = styled.div`
  width: 100px;
  height: 150px;
  background-color: yellow;
`;
