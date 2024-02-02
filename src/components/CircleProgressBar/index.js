import React from 'react';
import './style.css'; // Make sure to create this CSS file

const CircularProgressBar = ({ size, progress, strokeWidth }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="circular-progress-bar" width={size} height={size}>
      <circle
        className="circular-progress-bar__background"
        stroke="grey"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="circular-progress-bar__progress"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
      />
    </svg>
  );
};

export default CircularProgressBar;
