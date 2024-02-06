import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MobileDrawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button className="close-drawer" onClick={toggleDrawer}>
          &times;
        </button>
        <nav className="drawer-nav">
          <Link to="/" onClick={toggleDrawer}>Home</Link>
          <Link to="/about" onClick={toggleDrawer}>About</Link>
          <Link to="/contact" onClick={toggleDrawer}>Contact</Link>
          {/* Add other navigation links here */}
        </nav>
      </div>
      {isOpen && <div className="drawer-overlay" onClick={toggleDrawer}></div>}
    </>
  );
};

export default MobileDrawer;
