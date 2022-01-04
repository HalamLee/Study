import React, { useState, useEffect } from 'react';
import './index.css';
function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);
  useEffect(() => {
    console.log('condition :>> ', condition);
  }, [condition]);
  const renderCondition = condition ? 'True' : 'False';

  return (
    <div className="App">
      <h1>Lami</h1>
      <div>{renderCondition}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
