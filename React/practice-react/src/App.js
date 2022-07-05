import React, { useState } from 'react';
import Modal from './Modal';
import Counter from './Counter';
import Todo from './Todo';
import LectureTodo from './lecture/Todo';
import RandomImg from './RandomImg';
import Color from './color/Color';

function App() {
  // const [isOpne, setIsOpen] = useState(false);
  // const modalOpen = () => {
  //   setIsOpen(!isOpne);
  // };
  return (
    <>
      {/* <button onClick={modalOpen}>open</button>
      {isOpne && (
        <Modal>
          <h1>modal test</h1>
          <button onClick={modalOpen}>close</button>
        </Modal>
      )} */}
      {/* <Counter /> */}
      {/* <Color /> */}
      <Todo />
      {/* <LectureTodo /> */}
      {/* <RandomImg /> */}
    </>
  );
}

export default App;
