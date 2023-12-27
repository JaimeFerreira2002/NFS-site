import React, { useState } from 'react';

const ExpandableCard = ({ title, content }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="expandable-card">
      <div className="card-header" onClick={handleToggle}>
        <h3>{title}</h3>
      </div>
      {isExpanded && <div className="card-content">{content}</div>}
    </div>
  );
};

export default ExpandableCard;