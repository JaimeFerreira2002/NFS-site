import React from "react";
import "../CompetitionsRow/style.css";
import { useTranslation } from "react-i18next";
import fspt_photo from "../../../../assets/images/FSPT.jpg";
import fsa_photo from "../../../../assets/images/FSA.jpg";
const ImageGallery = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="fenixevo-image-row">
        
        <ImageCard
          key={"fspt"}
          src={"https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2FFenix%20Evo%2FFotos%20FSPT%2FFSPT-Drone.jpeg?alt=media&token=9cd71fde-65d5-4a1a-99b5-2010c5c11ff8"}
          title={t("fsnovaev01-page.competitions.fspt.title")}
          date={t("fsnovaev01-page.competitions.fspt.date")}
          location={t("fsnovaev01-page.competitions.fspt.location")}
          division={t("fsnovaev01-page.competitions.fspt.class")}
          position={""}
          url={"https://www.formulastudent.pt/"}
        />
      </div>
    </div>
  );
};

const ImageCard = ({ src, title, date, location, division, url, position }) => {
  const handleHover = () => {
    // Handle hover state if needed
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fenix-image-card"
    >
      <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img src={src} alt="Gallery" className="fenix-gallery-image" />
        <div className="fenix-image-overlay">
          <div className="fenix-overlay-text title">{title}</div>
          <div className="fenix-overlay-text date">{date}</div>
          <div className="fenix-overlay-text location">{location}</div>
          <div className="fenix-overlay-text division">{division}</div>
          <div className="fenix-overlay-text division">{position}</div>
        </div>
      </div>
    </a>
  );
};

export default ImageGallery;
