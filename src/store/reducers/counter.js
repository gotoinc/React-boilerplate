import { handleActions } from 'redux-actions';
import * as counterActions from '../actions';

const initialState = {
  count: 0,
};

const coutner = handleActions(
  {
    [counterActions.increment]: (state, payload) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    [counterActions.decrement]: (state, payload) => {
      return {
        ...state,
        count: state.count - 1,
      };
    },
  },
  initialState
);

export default coutner;
