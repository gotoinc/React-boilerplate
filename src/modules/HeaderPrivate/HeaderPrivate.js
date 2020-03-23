import React from 'react';
import styles from './HeaderPrivate.module.scss';
import logoLight from '../../assets/images/svg/Logo.svg';

const HeaderPrivate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={logoLight} alt="logo-light" />
        <h2>React Boilerplate</h2>
      </div>
    </div>
  );
};

export default HeaderPrivate;
