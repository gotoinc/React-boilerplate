import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from '../../utils';
import styles from './Button.module.scss';

const Button = ({ children, looks, type, ...rest }) => {
  const customStyles = getStyle({ looks, styles });
  return (
    <button className={customStyles} type={type} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
  looks: PropTypes.arrayOf(PropTypes.string),
  rest: PropTypes.shape({}),
  type: PropTypes.string,
};

Button.defaultProps = {
  looks: ['blue'],
  rest: {},
  type: 'button',
};

export default Button;
