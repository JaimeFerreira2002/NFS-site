import React from 'react';
import './style.css';

//we can use icons or images in this button, this is a
const CustomIconButton = ({ onClick, icon }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      <img src={icon} alt="custom-icon" className="custom-icon" />
    </button>
  );
};

export default CustomIconButton;