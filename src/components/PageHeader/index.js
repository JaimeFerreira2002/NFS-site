import React, { useState } from 'react';
import './style.css';

const PageHeader = ({ title, subtitle }) => {

  return (
    <div className='page-header-container'>
    <div className='page-title'>{title}</div>
    <div className='page-subtitle'>{subtitle}</div>
  </div>
  );
};

export default PageHeader;
