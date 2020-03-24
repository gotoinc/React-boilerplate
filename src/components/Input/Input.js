import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from '../../utils';
import styles from './Input.module.scss';

const Input = ({ looks, ...rest }) => {
  const customStyles = getStyle({ looks, styles });
  return <input className={customStyles} type="text" {...rest} />;
};

Input.propTypes = {
  looks: PropTypes.arrayOf(PropTypes.string),
  rest: PropTypes.shape({}),
};

Input.defaultProps = {
  looks: ['input'],
  rest: {},
};

export default Input;
