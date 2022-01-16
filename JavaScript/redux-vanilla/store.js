const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;

// actions
// action-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';

const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};
const addViewCount = () => {
  return {
    type: ADD_VIEWCOUNT,
  };
};

// reducers
const subscriberState = {
  // state 초기 값
  subscribers: 365,
};
const subscriberReducer = (state = subscriberState, action) => {
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

const viewState = {
  viewCount: 100,
};
const viewReducer = (state = viewState, action) => {
  switch (action.type) {
    case ADD_VIEWCOUNT:
      return {
        ...state,
        viewCount: state.viewCount + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  view: viewReducer,
  subscriber: subscriberReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));

// subscribe - view - dispatch

// store.subscribe(() => {
//   console.log('subscribe ===>>', store.getState());
// });

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());
