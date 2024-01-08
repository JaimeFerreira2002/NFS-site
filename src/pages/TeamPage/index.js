import React from 'react';
import './style.css';
import TeamBoardCard from '../../components/Team_Member_Card';
import TeamMemberCard from '../../components/Team_Member_Card';
import { useTranslation } from 'react-i18next'
import TeamLeader_Photo from "../../assets/images/members_photos/Ricardo_Cutileiro_TL.jpg";
import BSD_Photo from "../../assets/images/members_photos/Sergiu_Nica_BSD.jpg";
import TD_Photo from "../../assets/images/members_photos/Balbino_TD.jpg";
import CarBackgroundPhoto from "../../assets/images/car_background.jpg";





const TeamPage = () => {

  const { t } = useTranslation();

  //to put the image behind the text
  const backgroundStyle = {
    backgroundImage: CarBackgroundPhoto, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='team-page'>

      <div className='text-header-box' style={backgroundStyle}> 
        <div className="text-header">
          <h2>{t('team-page.title')}</h2>
          <p>{t('team-page.description')}</p>
        </div>
      </div>

     

        <div className='team-cards'>

          <div className='spacer'/> 
          <div className='board-cards-header'>
            {t('team-page.headers.board_header')}
          </div>

          <div className="board-cards">
            <TeamMemberCard className = 'BSD'
                name = "Sergiu Nica"
                role = {t('team-page.roles.BSD')}
                email = "s.nica@campus.fct.unl.pt"
                degree = {t('team-page.degrees.eletronic_engineering')}
                imagePath = {BSD_Photo}
              
            />
            <TeamMemberCard className = 'TL'
                name = "Ricardo Cutileiro"
                role = {t('team-page.roles.TL')}
                email = "r.cutileiro@campus.fct.unl.pt"
                degree = {t('team-page.degrees.mechanical_engineering')}
                imagePath = {TeamLeader_Photo}
                
            />
            <TeamMemberCard className = 'TD'
                name = "João Balbino"
                role = {t('team-page.roles.TD')}
                email = "jsl.ferreira@campus.fct.unl.pt"
                degree = {t('team-page.degrees.mechanical_engineering')}
                imagePath = {TD_Photo}               
              />
          </div>

          <div className='spacer'/> 
          <div className='management-cards-header'>
            {t('team-page.headers.management_header')}
          </div>

          <div className="management-cards">
            <TeamMemberCard className = 'Marketing'
                name = "Jaime Ferreira"
                role = {t('team-page.roles.MKT')}
                email = "jsl.ferreira@campus.fct.unl.pt"
                degree = {t('team-page.degrees.computer_engineering')}
                imagePath = {BSD_Photo}
              
            />
            <TeamMemberCard className = 'TL'
                name = "Ricardo Cutileiro"
                role = {t('team-page.roles.TL')}
                email = "r.cutileiro@campus.fct.unl.pt"
                degree = {t('team-page.degrees.mechanical_engineering')}
                imagePath = {TeamLeader_Photo}
                
            />
            <TeamMemberCard className = 'TD'
                name = "João Balbino"
                role = {t('team-page.roles.TD')}
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