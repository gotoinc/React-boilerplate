import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { RedirectRouter } from './routes';
import configureStore from './store/store';
import './assets/styles/index.css';
import App from './app';
import { createLocalizationSchema } from './utils';

const store = configureStore();

ReactDOM.render(
  <>
    <Provider store={store}>
      <Router history={RedirectRouter.history}>
        <Route path="/:locale?" component={App} />
      </Router>
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
