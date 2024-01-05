import React, { useState } from 'react';
import './style.css'; 

const ExpandableCard = ({ name, email, degree, imagePath, size }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleCard = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={toggleCard} style={{ width: `${size}px` }}>
      <div className="header">
        <div className="avatar" style={{ backgroundImage: `url(${imagePath})` }}></div>
        <div className="name">
          <h3>{name}</h3>
        </div>
      </div>
      {isExpanded && (
        <div className="details">
          <p>Email: {email}</p>
          <p>Degree: {degree}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;