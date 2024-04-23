import React from 'react';
import './style.css'; // Assuming you have a separate CSS file for the HamburgerButton styles

const HamburgerButton = ({ isDrawerOpen, toggleDrawer, shouldMove }) => {
  return (
    <div
      className={`hamburger ${isDrawerOpen ? 'is-active' : ''} ${shouldMove ? 'hamburger-move' : ''}`}
      onClick={toggleDrawer}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerButton;
