import React from 'react';
import MyHeader from './MyHeader';
import Counter from './Counter';
import style from './App.css';

function App() {
  const number = 5;

  return (
    <div className="App">
      {/* <MyHeader /> */}
      <Counter />
    </div>
  );
}

export default App;
