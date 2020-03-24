import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from '../../utils';
import styles from './Title.module.scss';

const Title = ({ children, looks }) => {
  const customStyles = getStyle({ looks, styles });
  return <div className={customStyles}>{children}</div>;
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  looks: PropTypes.arrayOf(PropTypes.string),
};

Title.defaultProps = {
  looks: ['default'],
};

export default Title;
