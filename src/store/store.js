import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './middlewares';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
let enhancer = applyMiddleware(...middlewares);

if (process.env.NODE_ENV === 'development') {
  enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));
}

const store = (initialState = {}) => {
  const storeIn = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  return storeIn;
};

export default store;
