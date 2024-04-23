import React, { useState } from 'react';
import './style.css'; // Import your component-specific CSS file
import { subclip } from 'three/src/animation/AnimationUtils';

const RoundButton = ({ position, title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`button-container ${position}`}>
      <button
        className="round-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      </button>
      {isHovered && (
        <div className="card">
          <h2>{title}</h2>
          <p>{text}</p>
          <button>Saber mais</button>
        </div>
      )}
    </div>
  );
};

export default RoundButton;