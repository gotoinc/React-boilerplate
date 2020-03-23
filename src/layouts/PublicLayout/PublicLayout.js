import React from 'react';
import PropTypes from 'prop-types';
import styles from './PublicLayout.module.scss';
import { HeaderPublic, FooterPublic } from '../../modules';

const PublicLayout = ({ children, routes }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <HeaderPublic />
        {React.cloneElement(children, routes.length && routes)}
      </div>
      <FooterPublic />
    </div>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({})),
};

PublicLayout.defaultProps = {
  routes: [],
};

export default PublicLayout;
