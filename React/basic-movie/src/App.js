import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [lami, setLami] = useState(0);
  useEffect(() => {
    console.log('count', count, 'lami', lami);
  }, [count, lami]);

  useEffect(() => {
    console.log('first rendering');
  }, []);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Lami</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setLami(lami + 1)}>Click1</button>
    </div>
  );
}

export default App;
