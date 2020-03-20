import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import localStorage from '../../utils/localStorage';
import RoutesList from '../RoutesList';
import RedirectRouter from '../RedirectRouter';

const Navigator = () => {
  const state = useSelector(state => state.users);
  console.log('Navigator state',state)
  // role should be received from context, props, window, redux or localStorage
  const role = localStorage.getItem('role');
  const locale = localStorage.getItem('locale');
  console.log('Navigator locale',locale)
  if (role === 'member') {
    return <Redirect to={RedirectRouter.getDashboardPath(locale)} />;
  }
  // for admin role
  if (role === 'admin') {
    return <Redirect to={`${RoutesList.admin}`} />;
  }
  return <Redirect to={`${RoutesList.signIn}`} />;
};

export default Navigator;
