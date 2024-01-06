import React from 'react';
import './style.css';
import TeamBoardCard from '../../components/Team_Board_Cards';
import { useTranslation } from 'react-i18next'
import TeamLeader_Photo from "../../assets/images/members_photos/Ricardo_Cutileiro_TL.jpg";
import BSD_Photo from "../../assets/images/members_photos/Sergiu_Nica_BSD.jpg";
import TD_Photo from "../../assets/images/members_photos/Balbino_TD.jpg";



const TeamPage = () => {

  const { t } = useTranslation();

  return (
    <div className='team-page'>

      <div className='text-header-box'> 
        <div className="text-header">
          <h2>{t('team-page.title')}</h2>
          <p>{t('team-page.description')}</p>
        </div>
      </div>

      <div className='team-cards'>
        <div className="board-cards">
          <TeamBoardCard className = 'BSD'
              name = "Sergiu Nica"
              role = {t('team-page.BSD')}
              email = "s.nica@campus.fct.unl.pt"
              degree = {t('team-page.degrees.eletronic_engineering')}
              imagePath = {BSD_Photo}
            
          />
          <TeamBoardCard className = 'TL'
              name = "Ricardo Cutileiro"
              role = {t('team-page.TL')}
              email = "r.cutileiro@campus.fct.unl.pt"
              degree = {t('team-page.degrees.mechanical_engineering')}
              imagePath = {TeamLeader_Photo}
              
          />
          <TeamBoardCard className = 'TD'
              name = "João Balbino"
              role = {t('team-page.TD')}
              email = "jsl.ferreira@campus.fct.unl.pt"
              degree = {t('team-page.degrees.mechanical_engineering')}
              imagePath = {TD_Photo}
              
            />
        </div>
      </div>
    
  </div>
  );
}

export default TeamPage;