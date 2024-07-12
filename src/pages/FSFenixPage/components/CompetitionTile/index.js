import React from "react";
import "../CompetitionTile/style.css";
import { useTranslation } from "react-i18next";
import fspt_photo from "../../../../assets/images/FSPT.jpg";
const ImageGallery = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="fenix-image-row">
        {" "}
        <ImageCard
          key={"fspt"}
          src={fspt_photo}
          title={t("fsfenix-page.competitions.fspt.title")}
          date={t("fsfenix-page.competitions.fspt.date")}
          location={t("fsfenix-page.competitions.fspt.location")}
          position={t("fsfenix-page.competitions.fspt.position")}
          url={"https://www.formulastudent.pt/"}
        />
      </div>
    </div>
  );
};

const ImageCard = ({ src, title, date, location, position, url }) => {
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
        <img src={src} alt="Gallery Image" className="fenix-gallery-image" />
        <div className="fenix-image-overlay">
          <div className="fenix-overlay-text title">{title}</div>
          <div className="fenix-overlay-text date">{date}</div>
          <div className="fenix-overlay-text location">{location}</div>
          <div className="fenix-overlay-text division">{position}</div>
        </div>
      </div>
    </a>
  );
};

export default ImageGallery;
