import React, { useState } from 'react';
import "./style.css";
import { useTranslation } from 'react-i18next';


const MemberCard = ({ name, role, degree, imageSrc }) => {
  const { t } = useTranslation();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="team-member">
      <div className="member-image-container" onClick={openPopup}>
        <img src={imageSrc} alt={`Team member: ${name}`} className="member-image" />
      </div>
      <div className="member-details">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{t(`fsfenix-page.roles.${role}`)}</p>
      </div>

      {isPopupOpen && (
        <MemberPopup
          name={name}
          role={t(`fsfenix-page.roles.${role}`)}
          degree={degree}
          imageSrc={imageSrc}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

const MemberPopup = ({ name, role, degree, imageSrc, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt={`Team member: ${name}`} className="popup-image" />
        <div className="popup-details">
          <h3 className="popup-name">{name}</h3>
          <p className="popup-role">{role}</p>
          <p className="popup-degree">{degree}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;