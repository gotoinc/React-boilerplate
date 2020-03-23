import React from 'react';
import styles from './HeaderPublic.module.scss';
import logoLight from '../../assets/images/svg/Logo.svg';

const HeaderPublic = () => {
  return (
    <div className={styles.container}>
      <img src={logoLight} alt="logo-light" />
      <h2>React Boilerplate</h2>
    </div>
  );
};

export default HeaderPublic;
