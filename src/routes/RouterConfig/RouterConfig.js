import React from 'react';
import { Redirect } from 'react-router-dom';
import { RoutesList, Navigator } from '..';
import { useMatch } from '../../hooks';

import { Page404, SignIn, Dashboard } from '../../pages';
import { Layout404, PublicLayout, PrivateLayout } from '../../layouts';

const RouterConfig = () => {
  const match = useMatch();
  console.log('RouterConfig match',match)
  return {
    routes: [
      {
        path: `${match.path}${RoutesList.signIn}`,
        exact: true,
        component: PublicLayout,
        children: <SignIn />,
        status: 'public',
      },
      {
        path: `${match.path}${RoutesList.dashboard}`,
        exact: true,
        component: PrivateLayout,
        children: <Dashboard />,
        allowedRoles: ['member'],
        status: 'private',
      },
      {
        path: `${match.path}${RoutesList.page404}`,
        exact: true,
        component: Layout404,
        children: <Page404 />,
        status: 'default',
      },
      {
        path: `${match.path}`,
        exact: true,
        component: Navigator,
        status: 'default',
      },
    ],
    noRouteFound: <Redirect from="*" to={`${match.path}${RoutesList.page404}`} />,
  };
};

export default RouterConfig;
