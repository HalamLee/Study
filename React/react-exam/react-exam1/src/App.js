import React from 'react';
import Counter from './Counter';
import './App.css';
import Container from './Container';
import MyHeader from './MyHeader';

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
