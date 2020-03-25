import { handleActions } from 'redux-actions';
import * as localeActions from '../actions/localeActions';

const initialState = {
  error: '',
  loading: false,
  role: 'member',
  locale: '',
};

const localeReducer = handleActions(
  {
    [localeActions.changeLocale.success]: (state, action) => {
      return {
        ...state,
        locale: action.payload,
      };
    },
  },
  initialState
);

export default localeReducer;
