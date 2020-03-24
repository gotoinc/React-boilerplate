import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from '../../utils';
import styles from './ErrorText.module.scss';

const ErrorText = ({ children, looks }) => {
  const customStyles = getStyle({ looks, styles });
  return <div className={customStyles}>{children}</div>;
};

ErrorText.propTypes = {
  looks: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

ErrorText.defaultProps = {
  looks: ['error'],
};

export default ErrorText;
