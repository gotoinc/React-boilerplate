import React from 'react';
import PropTypes from 'prop-types';
// import { FooterPublic, HeaderPublic } from '../../modules';

const PublicLayout = ({ children, routes }) => {
  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      <div>
        {/* <HeaderPublic /> */}
        {React.cloneElement(children, routes.length && routes)}
      </div>
      {/* <FooterPublic /> */}
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
