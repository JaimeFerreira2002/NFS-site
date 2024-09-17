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
          src={fspt_photo}
          title={t("fsfenixevo-page.competitions.fspt.title")}
          date={t("fsfenixevo-page.competitions.fspt.date")}
          location={t("fsfenixevo-page.competitions.fspt.location")}
          division={t("fsfenixevo-page.competitions.fspt.class")}
          position={""}
          url={"https://www.formulastudent.pt/"}
        />
        <ImageCard
          key={"fsa"}
          src={"https://firebasestorage.googleapis.com/v0/b/novaformulastudent.appspot.com/o/Fotos%2Faustria.jpg?alt=media&token=605ad51f-24ab-455f-bd89-0eb1034ad510"}
          title={t("fsfenixevo-page.competitions.fsa.title")}
          date={t("fsfenixevo-page.competitions.fsa.date")}
          location={t("fsfenixevo-page.competitions.fsa.location")}
          division={t("fsfenixevo-page.competitions.fsa.class")}
          position={""}
          url={"https://fsaustria.at/"}
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
