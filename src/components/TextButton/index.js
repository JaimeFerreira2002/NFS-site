import React from 'react';
import './style.css';

//we can use icons or images in this button
const CustomTextButton = ({ onClick, text }) => {
  return (
    <button className="text-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomTextButton;