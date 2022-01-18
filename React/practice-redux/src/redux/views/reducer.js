import { ADD_VIEW } from './types';
const initalState = {
  count: 0,
};

const viewsReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default viewsReducer;
