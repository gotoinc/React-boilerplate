import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RouterConfig, RoutesWithSubRoutes, RedirectRouter } from './routes';

const App = () => {
  const { routes, noRouteFound } = RouterConfig();
  return (
    <div id="body">
      <button onClick={() => RedirectRouter.history.push('/en/dashboard')}>to dashboard</button>
      <Switch>
        {routes.map(route => {
          return <RoutesWithSubRoutes key={route.path} {...route} />;
        })}
        {noRouteFound}
      </Switch>
    </div>
  );
};

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      locale: PropTypes.string,
    }),
  }).isRequired,
};

export default App;
