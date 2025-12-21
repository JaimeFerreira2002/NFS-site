import React from 'react';
import { useTranslation } from "react-i18next";
import MapComponent from '../../components/maps.js';
import './style.css';

const ContactsPage = () => {
  const { t } = useTranslation();

  return (
    <div className='contacts-page-wrapper'>
      <div className='contacts-page-container'>
        {/* Left side - Contact Info */}
        <div className='contacts-left-section'>
          <div className='contact-info-section'>
            <h2 className="contacts-page-title">{t('contacts-page.page-title')}</h2>
            
            {/* Contact cards stacked vertically */}
            <div className='contact-details-stack'>
              <div className='contact-card'>
                <h3>{t('contacts-page.team-email')}</h3>
                <p>formulastudent@ae.fct.unl.pt</p>
              </div>

              <div className='contact-card'>
                <h3>{t('contacts-page.cr-email')}</h3>
                <p>cr.formulastudent@ae.fct.unl.pt</p>
              </div>

              <div className='contact-card'>
                <h3>{t('contacts-page.team-hq')}</h3>
                <p className="address-line">Faculdade de Ciências e Tecnologia, 2829-516 Caparica</p>
              </div>

              <div className='contact-card'>
                <h3>Instagram</h3>
                <a 
                  href="https://www.instagram.com/novaformulastudent?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  @novaformulastudent
                </a>
              </div>

              <div className='contact-card'>
                <h3>LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/company/formula-student-fct/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Nova Formula Student
                </a>
              </div>
            </div>

            <div className='email-cta-section'>
              <p className='cta-text'>{t('contacts-page.cta-text')}</p>
              <a 
                href="mailto:formulastudent@ae.fct.unl.pt" 
                className='email-button'
              >
                {t('contacts-page.email-button')}
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Map */}
        <div className='contacts-right-section'>
          <MapComponent mapCenter={[38.66214021803797, -9.2070192353163]} mapZoom={16} />
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;