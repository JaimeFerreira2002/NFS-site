import React from 'react';
import './style.css';

const SectionTitle = ({ text , fontSize, altName, textColor, dividersColor}) => {
   
  const titleStyle = {
        fontSize: fontSize, // Use the provided fontSize or an empty string if not provided
        color : textColor,
      };

  const leftDividerStyle = {
        background: `linear-gradient(to left, ${dividersColor}, #ffffff)`, // Use the provided dividersColor or black if not provided
      };    

  const rightDividerStyle = {
        background: `linear-gradient(to right, ${dividersColor}, #ffffff)`, // Use the provided dividersColor or black if not provided
      };    
    

  return (
    <div className='title-container' altName={altName}>
      <div style={leftDividerStyle} className='divisor-left'></div>
      <div style={titleStyle} className='title-text'>{text}</div>
      <div style={rightDividerStyle} className='divisor-right'></div>
    </div>
  );
};

export default SectionTitle;