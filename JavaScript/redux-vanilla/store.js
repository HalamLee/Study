const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// actions
// action-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};

// reducers
const initialState = {
  // state 초기 값
  subscribers: 365,
};
const reducer = (state = initialState, action) => {
  // state 없으면 설정한 초기 값 사용
  switch (
    action.type // switch문을 통해 핸들링
  ) {
    case ADD_SUBSCRIBER: // action의 type이 ADD_SUBSCRIBER라면
      return {
        ...state, // state 값
        subscribers: state.subscribers + 1, // state의 subscribers 1 증가
      };
    default:
      // action의 type이 ADD_SUBSCRIBER가 아니라면 state 반환
      return state;
  }
};

// store
const store = createStore(reducer, applyMiddleware(logger));

// subscribe - view - dispatch

// store.subscribe(() => {
//   console.log('subscribe ===>>', store.getState());
// });

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
