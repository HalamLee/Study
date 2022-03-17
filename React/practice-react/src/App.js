const list = ['lee', 'kim', 'park'];

const show1 = () => list.map((name, index) => <span key={index}>{name}</span>);

const show2 = () => {
  list.map((name, index) => <span key={index}>{name}</span>);
};

const show3 = () => {
  return list.map((name, index) => <span key={index}>{name}</span>);
};

const show4 = () => {
  list.map((name, index) => {
    <span key={index}>{name}</span>;
  });
};

const show5 = () => {
  return list.map((name, index) => {
    <span key={index}>{name}</span>;
  });
};

const show6 = () => {
  return list.map((name, index) => {
    return <span key={index}>{name}</span>;
  });
};

const show7 = () => {
  list.map((name, index) => {
    return <span key={index}>{name}</span>;
  });
};

const show8 = () =>
  list.map((name, index) => {
    <span key={index}>{name}</span>;
  });

const show9 = () =>
  list.map((name, index) => {
    return <span key={index}>{name}</span>;
  });

const show10 = list.map((name, index) => <span key={index}>{name}</span>);

const show11 = list.map((name, index) => {
  <span key={index}>{name}</span>;
});

const show12 = list.map((name, index) => {
  return <span key={index}>{name}</span>;
});

function App() {
  return (
    <>
      {show1()}
      {show3()}
      {show6()}
      {show9()}
      {show10}
      {show12}
    </>
  );
}

export default App;
