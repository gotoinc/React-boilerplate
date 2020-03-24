import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';
import { getStyle } from '../../utils';

const Container = ({ looks, children }) => {
  const customStyles = getStyle({ looks, styles });
  return <div className={`${customStyles}`}>{children}</div>;
};

Container.propTypes = {
  looks: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element.isRequired,
};

Container.defaultProps = {
  looks: ['container'],
};

export default Container;
