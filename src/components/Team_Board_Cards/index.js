import React, { useState } from 'react';
import './style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const TeamBoardCard = ({ name, role, email, degree, imagePath }) => {
  
  return (
    <div className="card">
      <img src={imagePath} alt={"Photo"} className="card-photo" />
      <div className="card-details">
        <p className='name'>{name}</p>
        <p className='role'> {role}</p>
        <p className='email'><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
        <p className='dergree'><FontAwesomeIcon icon={faGraduationCap} /> {degree}</p>
      </div>
    </div>
  );
};

TeamBoardCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
};

export default TeamBoardCard;