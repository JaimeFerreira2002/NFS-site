import React from 'react';
import "./style.css";


const MemberCard = ({ name, role, imageSrc }) => {
  return (
    <div className="team-member">
      <div className="member-image-container">
        <img src={imageSrc} alt={`Team member: ${name}`} className="member-image" />
      </div>
      <div className="member-details">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;