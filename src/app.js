import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { changeLocale } from './store/actions/localeActions';
import { RouterConfig, RoutesWithSubRoutes, RedirectRouter } from './routes';
import { useLocale } from './hooks';

import messagesRu from './translations/ru.json';
import messagesEn from './translations/en.json';

const messages = {
  ru: messagesRu,
  en: messagesEn,
};

const App = () => {
  const dispatch = useDispatch();
  const [locale] = useLocale();
  useEffect(() => {
    if (RedirectRouter.getCurrentLocale()) {
      dispatch(changeLocale.success(RedirectRouter.getCurrentLocale()));
    }
  }, [dispatch]);
  const { routes, noRouteFound } = RouterConfig();
  if (locale) {
    return (
      // you can choose messages translations list from a translation file or dynamically from a Redux
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div id="body">
          <Switch>
            {routes.map(route => {
              return <RoutesWithSubRoutes key={route.path} {...route} />;
            })}
            {noRouteFound}
          </Switch>
        </div>
      </IntlProvider>
    );
  }
  return null;
};

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      locale: PropTypes.string,
    }),
  }).isRequired,
};

export default App;
