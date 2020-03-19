import { createAction } from 'redux-actions';

export const createAsyncAction = type => ({
  cancel: createAction(`${type}::CANCEL`),
  failure: createAction(`${type}::FAILURE`),
  request: createAction(`${type}::REQUEST`),
  success: createAction(`${type}::SUCCESS`),
  start: createAction(`${type}::START`),
  end: createAction(`${type}::END`),
});

export default prefix => type => createAsyncAction(`${prefix}:${type}`);
