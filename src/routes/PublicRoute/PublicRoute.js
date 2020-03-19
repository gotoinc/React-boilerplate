import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { localStorage } from '../../utils';

const PublicRoute = ({ component: Component, children, path, routes }) => {
  return (
    <Route
      path={path}
      render={route => {
        const authToken = localStorage.getItem('authToken');
        return typeof authToken === 'string' ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: route.location },
            }}
          />
        ) : (
          <Component routes={routes}>{children}</Component>
        );
      }}
    />
  );
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({})),
  component: PropTypes.func.isRequired,
};

PublicRoute.defaultProps = {
  routes: [],
};

export default PublicRoute;
