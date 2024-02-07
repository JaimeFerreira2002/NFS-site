import React from 'react';
import './style.css';

const SectionTitle = ({ text , fontSize, altName}) => {
   
  const titleStyle = {
        fontSize: fontSize, // Use the provided fontSize or an empty string if not provided
      };

  return (
    <div className='title-container' altName = {altName}>
        <div className='divisor-left'></div>
        <div style={titleStyle} className='title-text'>{text}</div>
        <div className='divisor-right'></div>
  </div>
  );
};

export default SectionTitle;