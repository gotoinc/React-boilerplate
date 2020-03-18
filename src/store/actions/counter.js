import { createActions } from 'redux-actions';

export const { increment, decrement } = createActions({
  INCREMENT: data => ({ data }),
  DECREMENT: data => ({ data }),
});
