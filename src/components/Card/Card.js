import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import { getStyle } from '../../utils';

const Card = ({ looks, children }) => {
  const customStyles = getStyle({ looks, styles });
  return (
    <div className={customStyles}>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  looks: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
  looks: ['card'],
};

export default Card;
