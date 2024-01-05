import React from 'react';
import './style.css';
import ExpandableCard from '../../components/ExpandableCard';
import { useTranslation } from 'react-i18next'
import imagePath from '../../assets/images/avatar_placeholder.png';


const TeamPage = () => {

  const { t } = useTranslation();

  return (
    <div className='text-header-box'>
    <div className="text-header">
      <h2>{t('team-page.title')}</h2>
      <p>{t('team-page.description')}</p>
    </div>

    <div className="board-cards">
      <ExpandableCard 
        name = "Jaime Ferreira"
        email = "jsl.ferreira@campus.fct.unl.pt"
        degree = "Engenharia Informática"
        imagePath = {imagePath}
        size = {300}

        />
    </div>
  </div>
  );
}

export default TeamPage;