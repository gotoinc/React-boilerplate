import React from 'react';
import { Redirect } from 'react-router-dom';
import localStorage from '../../utils/localStorage';
import RoutesList from '../RoutesList';

const Navigator = () => {
  // role should be received from context, props, window, redux or localStorage
  const role = localStorage.getItem('role');
  if (role === 'member') {
    return <Redirect to={`${RoutesList.main}`} />;
  }
  // for admin role
  if (role === 'admin') {
    return <Redirect to={`${RoutesList.admin}`} />;
  }
  return <Redirect to={`${RoutesList.signIn}`} />;
};

export default Navigator;
