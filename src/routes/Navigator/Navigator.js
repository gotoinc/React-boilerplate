import React from 'react';
import { Redirect } from 'react-router-dom';

import localStorage from '../../utils/localStorage';
import RoutesList from '../RoutesList';
import RedirectRouter from '../RedirectRouter';

const Navigator = () => {
  const role = localStorage.getItem('role');

  if (role === 'member') {
    return <Redirect to={RedirectRouter.getDashboardPath()} />;
  }
  // for admin role
  if (role === 'admin') {
    return <Redirect to={`${RoutesList.admin}`} />;
  }
  return <Redirect to={RedirectRouter.getLoginPath()} />;
};

export default Navigator;
