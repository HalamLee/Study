function App() {
  const name = 'Lami';
  return (
    <>
      <div>
        {name === 'Lami' ? (
          <h1>저는 Lami 입니다.</h1>
        ) : (
          <h1>저는 Lami가 아닙니다.</h1>
        )}
      </div>
    </>
  );
}

export default App;
