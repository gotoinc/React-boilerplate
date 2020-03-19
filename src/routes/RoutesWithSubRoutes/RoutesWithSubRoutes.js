import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PrivateRoute, PublicRoute, WithRole } from '..';

const RouteWithSubRoutes = ({
  status,
  component: Layout,
  allowedRoles,
  routes,
  children,
  path,
  ...rest
}) => {
  if (status === 'private') {
    return (
      <PrivateRoute
        path={path}
        component={allowedRoles.length ? WithRole({ allowedRoles, wrapper: Layout }) : Layout}
        routes={routes}
        {...rest}
      >
        {children}
      </PrivateRoute>
    );
  }

  if (status === 'public') {
    return (
      <PublicRoute component={Layout} routes={routes} path={path} {...rest}>
        {children}
      </PublicRoute>
    );
  }
  return (
    <Route
      path={path}
      render={props => {
        return (
          <Layout routes={routes} {...props}>
            {children}
          </Layout>
        );
      }}
      {...rest}
    />
  );
};

RouteWithSubRoutes.propTypes = {
  status: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
  routes: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.element,
  path: PropTypes.string.isRequired,
};

RouteWithSubRoutes.defaultProps = {
  allowedRoles: [],
  routes: [],
  children: <></>,
};

export default RouteWithSubRoutes;
