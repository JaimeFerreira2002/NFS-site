import React, { useState } from 'react';
import './style.css';

const PageHeader = ({ title, subtitle, gradientColor , height}) => {

  const containerStyle = {
    height: 'auto', // Use the provided height or set it to 'auto' by default
  }

  const titleStyle = {
    backgroundImage: `linear-gradient(to right, ${gradientColor}, #ffffff)`,
  }

  return (
    <div style={containerStyle} className='page-header-container'>
      <div style={titleStyle} className='page-title'>{title}</div>
      <div className='page-subtitle'>{subtitle}</div>
  </div>
  );
};

export default PageHeader;
