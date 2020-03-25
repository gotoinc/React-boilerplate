import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeLocale } from './store/actions/localeActions';
import { RouterConfig, RoutesWithSubRoutes, RedirectRouter } from './routes';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (RedirectRouter.getCurrentLocale()) {
      dispatch(changeLocale.success(RedirectRouter.getCurrentLocale()));
    }
  }, [dispatch]);

  const { routes, noRouteFound } = RouterConfig();
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
