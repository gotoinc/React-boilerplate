import React from 'react';
import PropTypes from 'prop-types';
import { HeaderPrivate, Sidebar } from '../../modules';

const PrivateLayout = ({ children, routes }) => {
  return (
    <Sidebar>
      <div className="flex flex-col justify-between h-screen bg-gray-100">
        <div>
          <HeaderPrivate />
          {React.cloneElement(children, routes.length && routes)}
        </div>
        {/* <FooterPrivate /> */}
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
