import React, { useState } from "react";
import { X } from 'lucide-react';
import "./style.css";

const carColorMap = {
  dragon: "#19ff38",
  fenix: "#19a3ff",
  fenixevo: "#1966ff",
};

function getStyle(car) {
  const style = {
    backgroundImage: `linear-gradient(to right, ${carColorMap[car]}, #ffffff)`,
  };
  return style;
}

const SpecsSection = ({ title, dataKeys, t, car, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsModalOpen(false);
    }, 300);
  };

  // Show first 3 specs in card
  const previewKeys = dataKeys.slice(0, 3);
  const hasMore = dataKeys.length > 3;

  return (
    <>
      <div className="specs-section-card" onClick={handleCardClick}>
        <h2 className="specs-section-title" style={getStyle(car)}>
          {t(`fs${car}-page.technical-specs.${title}.title`)}
        </h2>
        <ul className="specs-section-preview">
          {previewKeys.map((key) => (
            <li key={key}>
              <strong>{t(`fs${car}-page.technical-specs.${title}.${key}`)}</strong>:{" "}
              {t(`fs${car}-page.technical-specs.${title}.${key}-value`)}
            </li>
          ))}
          {hasMore && (
            <li className="specs-section-more">
              +{dataKeys.length - 3} {t(`fs${car}-page.specs.more`) || 'more...'}
            </li>
          )}
        </ul>
        <p className="specs-section-cta">
          {t(`fs${car}-page.specs.click-more`) || 'Clique para saber mais →'}
        </p>
      </div>

      {isModalOpen && (
        <div 
          className={`specs-modal-overlay ${isClosing ? 'closing' : ''}`}
          onClick={handleClose}
        >
          <div 
            className={`specs-modal-content ${isClosing ? 'closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="specs-modal-close"
              onClick={handleClose}
              aria-label="Close"
            >
              <X size={20} color="white" />
            </button>

            <h2 className="specs-modal-title" style={getStyle(car)}>
              {t(`fs${car}-page.technical-specs.${title}.title`)}
            </h2>

            {description && (
              <div className="specs-modal-description">
                <p>{t(`fs${car}-page.technical-specs.${title}.description`)}</p>
              </div>
            )}

            <h3 className="specs-modal-subtitle">
              {t(`fs${car}-page.specs.technical-specs`) || 'Especificações Técnicas'}
            </h3>

            <ul className="specs-modal-specs">
              {dataKeys.map((key) => (
                <li key={key}>
                  <strong>{t(`fs${car}-page.technical-specs.${title}.${key}`)}</strong>:{" "}
                  {t(`fs${car}-page.technical-specs.${title}.${key}-value`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SpecsSection;