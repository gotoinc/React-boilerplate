import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from 'react-sidebar';
import menuIcon from '../../assets/images/svg/menu.svg';
import styles from './Sidebar.module.scss';
import { RedirectRouter } from '../../routes';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRoutesList = useMemo(() => {
    return [
      {
        id: 1,
        title: 'Dashboard',
        route: 'dashboard',
        handleClick: RedirectRouter.goToDashboard,
      },
      {
        id: 2,
        title: 'Profile',
        route: 'profile',
        handleClick: RedirectRouter.goToProfile,
      },
      {
        id: 3,
        title: 'Log out',
        route: 'sign-in',
        handleClick: RedirectRouter.logOut,
      },
    ];
  }, []);
  const activeRoute = RedirectRouter.history.location.pathname.split('/')[2];

  return (
    <Menu
      sidebarClassName={styles.sidebarClassName}
      sidebar={
        <ul className={styles.sidebarList} role="menu">
          {sidebarRoutesList.map(({ handleClick, id, route, title }) => {
            return (
              <div
                onClick={handleClick}
                onKeyPress={handleClick}
                role="button"
                tabIndex={0}
                key={id}
              >
                <li
                  className={`${styles.sidebarListItem} ${
                    activeRoute === route ? styles.active : ''
                  }`}
                >
                  {title}
                </li>
              </div>
            );
          })}
        </ul>
      }
      open={isOpen}
      onSetOpen={setIsOpen}
      styles={{ sidebar: { background: 'white' } }}
    >
      <div
        onKeyPress={() => setIsOpen(true)}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
      >
        <img src={menuIcon} className={styles.img} alt="menu" />
      </div>
      {children}
    </Menu>
  );
};

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Sidebar;
