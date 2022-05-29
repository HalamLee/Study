// example 1)
function example() {
  const [state, setState] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value, // input에 입력한 것을 동적으로 받아서 사용함
    });
  };

  return (
    <React.Fragment>
      <input value={state.id} onChange={handleChange} name="name" />
      <input value={state.password} onChange={handleChange} name="password" />
    </React.Fragment>
  );
}

// example 2)
const noop = createAction('INCREMENT');

const reducer = handleActions(
  {
    [noop]: (state, action) => ({
      // 여기서도 동적으로 활용
      counter: state.counter + action.payload,
    }),
  },
  { counter: 0 }
);

// example 3)
const funcName0 = 'func0';
const funcName1 = 'func1';
const funcName2 = 'func2';

const obj = {
  [funcName0]() {
    return 'func0';
  },
  [funcName1]() {
    return 'func1';
  },
  [funcName2]() {
    return 'func2';
  },
};

for (let i = 0; i < 3; i++) {
  console.log(obj[`func${i}`]()); // func0 func1 func2 => 동적으로 메서드 실행
}
