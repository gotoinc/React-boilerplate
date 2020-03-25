import React from 'react';
import styles from './HeaderPublic.module.scss';
import logoLight from '../../assets/images/svg/Logo.svg';
import { LocalizationBar } from '..';

const HeaderPublic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={logoLight} alt="logo-light" />
        <h2>React Boilerplate</h2>
      </div>
      <div className={styles.localizationBar}>
        <LocalizationBar />
      </div>
    </div>
  );
};

export default HeaderPublic;
