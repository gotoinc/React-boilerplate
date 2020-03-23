import React from 'react';
import PropTypes from 'prop-types';
import { HeaderPrivate, Sidebar, FooterPublic } from '../../modules';
import styles from './PrivateLayout.module.scss';

const PrivateLayout = ({ children, routes }) => {
  return (
    <Sidebar>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <HeaderPrivate />
          {React.cloneElement(children, routes.length && routes)}
        </div>
        <FooterPublic />
      </div>
    </Sidebar>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({})),
};

PrivateLayout.defaultProps = {
  routes: [],
};

export default PrivateLayout;
