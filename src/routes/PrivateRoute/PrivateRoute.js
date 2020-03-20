import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { localStorage } from '../../utils';

const PrivateRoute = ({ component: Component, children, path, routes }) => {
  return (
    <Route
      path={path}
      render={route => {
        const authToken = localStorage.getItem('authToken');
        return typeof authToken === 'string' ? (
          <Component routes={routes}>{children}</Component>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: route.location },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({})),
  component: PropTypes.func.isRequired,
};

PrivateRoute.defaultProps = {
  routes: [],
};

export default PrivateRoute;
