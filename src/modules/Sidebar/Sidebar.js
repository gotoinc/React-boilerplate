import React, { useState } from 'react';
import Menu from 'react-sidebar';
import menuIcon from '../../assets/images/svg/menu.svg';
import styles from './Sidebar.module.scss';
import { RedirectRouter } from '../../routes';
import { localStorage, handleLogout } from "../../utils";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu
      sidebar={
        <ul className={styles.sidebarList}>
          <li
            className={`${styles.sidebarListItem} ${styles.active}`}
            onClick={() => RedirectRouter.goToProfile()}
          >
            Profile
          </li>
          <li
            className={styles.sidebarListItem}
            onClick={() => {
              RedirectRouter.goToDashboard();
            }}
          >
            Dashboard
          </li>
          <li className={styles.sidebarListItem} onClick={handleLogout}>Log Out</li>
        </ul>
      }
      open={isOpen}
      onSetOpen={setIsOpen}
      styles={{ sidebar: { background: 'white' } }}
    >
      <img src={menuIcon} className={styles.img} onClick={() => setIsOpen(true)} alt={'menu'} />
    </Menu>
  );
};

export default Sidebar;
