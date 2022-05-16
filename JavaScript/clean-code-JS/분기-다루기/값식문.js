// case01
// JSX가 JS로 정상적으로 변환
// This JSX:
ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);

// Is transformed to this JS:
ReactDOM.render(
  React.createElement('div', { id: 'msg' }, 'Hello World!'),
  mountNode
);

// case02
// This JSX:
{
  /* <div id={if (condition) {'msg'}}>Hello World!</div> => 잘못된 방식 */
}

// Is transformed to this JS:
// React.createElement("div", {id: if (condition) {'msg'}}, "Hello World!"); => 잘못된 방식

ReactDOM.render(
  <div id={condition ? 'msg' : null}>Hello World!</div>,
  mountNode
); // 정상 작동 : 삼항연산자는 값으로 귀결되는 식이기 때문.

// const obj = {id: if (condition) {'msg'}} => 값이 들어와야 하는데 문이 들어옴

// case03
// 즉시실행함수 IIFE
// 원래 중괄호 안에서는 값, 식만 사용해야 하지만 즉시실행함수를 통해 바로 return하기 때문에 중괄호 안에서 문을 사용할 수 있게 됨.
function ReactComponent() {
  return (
    <section>
      <h1>Color</h1>
      <h3>Name</h3>
      <p>{this.state.color || 'white'}</p>
      {/* this.state.color 가 false면 white */}
      <h3>Hex</h3>
      <p>
        {(() => {
          switch (this.state.color) {
            case 'red':
              return '#FF0000';
            case 'green':
              return '#00FF00';
            case 'blue':
              return '#0000FF';
            default:
              return '#FFFFFF';
          }
        })()}
      </p>
    </section>
  );
}

// case04
// 즉시실행함수를 통해 for문을 돌려 임시변수에 값을 누적시키고 반환하는 안 좋은 코드를 좋게 수정하기.
// 안 좋은 코드
function ReactComponent() {
  return (
    <tbody>
      {(() => {
        const rows = [];

        for (let i = 0; i < objectRows.length; i++) {
          rows.push(<ObjectRow key={i} data={objectRows[i]} />);
        }
        return rows;
      })()}
    </tbody>
  );
}
// 수정 코드
function ReactComponent() {
  return (
    <tbody>
      {objectRows.map((obj, i) => (
        <ObjectRow key={i} data={obj[i]} />
      ))}
    </tbody>
  );
}

// case05
// case04와 마찬가지로 즉시실행함수를 이용해 만든 코드를 수정하기
// 안 좋은 코드
function ReactComponent() {
  return (
    <div>
      {(() => {
        if (conditionOne) return <span>One</span>;
        if (conditionTwo) return <span>Two</span>;
        else conditionOne;
        return <span>Three</span>;
      })()}
    </div>
  );
}
// 수정 코드
function ReactComponent() {
  return (
    <div>
      {conditionOne && <span>One</span>}
      {conditionTwo && <span>Two</span>}
      {!conditionTwo && <span>Three</span>}
    </div>
  );
}
