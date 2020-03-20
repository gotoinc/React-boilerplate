import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RouterConfig, RoutesWithSubRoutes } from './routes';
import localStorage from './utils/localStorage';
import { RedirectRouter } from './routes';

const App = (props) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
  }, []);
  const { routes, noRouteFound } = RouterConfig();
  const handleChangeLocale = (locale) => {
      localStorage.setItem('locale', locale);
       RedirectRouter.history.replace(`/${locale}/dashboard`)
  }
  return (
    <div id="body">
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
