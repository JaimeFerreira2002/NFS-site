import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAnglesUp,
} from "@fortawesome/free-solid-svg-icons";

const PhotoGallery = ({ photos }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      <div className="grid-container">
        <div className={`grid ${showAll ? 'show-all' : ''}`}>
          {photos.map((photo, index) => (
            <div key={index} className="photo-item" onClick={() => handlePhotoClick(photo)}>
              <img src={photo} alt={`Photo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="icon-btn" onClick={handleShowMore}>
        <FontAwesomeIcon icon={showAll ? faAnglesUp : faAnglesDown} size="2x" />
      </button>

      {selectedPhoto && (
        <div className="photo-modal" onClick={closePhoto}>
          <div className="photo-modal-content">
            <img src={selectedPhoto} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
