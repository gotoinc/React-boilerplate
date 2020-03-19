import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { localStorage } from '../../utils';

// Role authorization HOC
const WithRole = ({ allowedRoles, wrapper: WrappedComponent }) => {
  const currentRole = localStorage.getItem('role');
  if (
    typeof currentRole === 'string' &&
    allowedRoles.length &&
    allowedRoles.includes(currentRole)
  ) {
    return WrappedComponent;
  }
  return <Redirect to="/" />;
};

WithRole.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
  wrapper: PropTypes.func.isRequired,
};

WithRole.defaultProps = {
  allowedRoles: [],
};

export default WithRole;
