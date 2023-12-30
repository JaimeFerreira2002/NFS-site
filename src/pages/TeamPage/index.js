import React from 'react';
import './index.css';
import { useTranslation } from 'react-i18next'

const TeamPage = () => {

  const { t } = useTranslation();

  return (
    <div>
    <div className="text-header">
      <h2>{t('team-page.title')}</h2>
      <p>{t('team-page.description')}</p>
    </div>

    <div className="board-cards">
      {/* Expandable cards go here */}
    </div>
  </div>
  );
}

export default TeamPage;