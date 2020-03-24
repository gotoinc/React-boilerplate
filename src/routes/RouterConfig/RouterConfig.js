import React from 'react';
import { Redirect } from 'react-router-dom';
import { RoutesList, Navigator, RedirectRouter } from '../index';
import { useMatch } from '../../hooks';

import { Page404, SignIn, SignUp, Dashboard, Profile } from '../../pages';
import { Layout404, PublicLayout, PrivateLayout } from '../../layouts';

const RouterConfig = () => {
  const match = useMatch();
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
        path: `${match.path}${RoutesList.signUp}`,
        exact: true,
        component: PublicLayout,
        children: <SignUp />,
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
        path: `${match.path}${RoutesList.profile}`,
        exact: true,
        component: PrivateLayout,
        children: <Profile />,
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
    noRouteFound: <Redirect from="*" to={RedirectRouter.getPage404Path(match.params.locale)} />,
  };
};

export default RouterConfig;
