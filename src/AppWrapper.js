import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { RedirectRouter } from './routes';
import App from './app';

const AppWrapper = (props) => {
  const state = useSelector(state => state);
  console.log('state from app wrapper',state)
  console.log('AppWrapper props',props)
  console.log('RedirectRouter.history',RedirectRouter.history)
  return (
    <Router history={RedirectRouter.history}>
      <Route path="/:locale(en|ru)?" component={App} />
    </Router>
  )
}

export default AppWrapper;
