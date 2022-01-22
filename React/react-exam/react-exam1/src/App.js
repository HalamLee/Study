import React from 'react';
import MyHeader from './MyHeader';

function App() {
  const style = {
    App: {
      backgroundColor: 'black',
      textAlign: 'center',
    },
    h2: {
      color: 'red',
    },
    bold_text: {
      color: 'green',
    },
  };

  const name = 'Lami';
  const number = 5;

  return (
    <div style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>안녕 리액트 {name}</h2>
      <b style={style.bold_text}>
        {number}는 : {number % 2 === 0 ? '짝수' : '홀수'}
      </b>
    </div>
  );
}

export default App;
