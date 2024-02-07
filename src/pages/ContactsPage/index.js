import React, { useEffect, useRef, useState } from 'react'; // Added useState here

import { useTranslation } from "react-i18next";

import emailjs from 'emailjs-com';


import mapIcon from "../../assets/images/mapIcon.png";
import linkedinIcon from "../../assets/images/linkedIn_icon.png";
import instagramIcon from "../../assets/images/instagram_icon.png";

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './style.css';





const ContactsPage = () => {
  const { t } = useTranslation();
  const mapRef = useRef(null);
  const form = useRef();

  const [formSubmitting, setFormSubmitting] = useState(false);

  const [feedbackMessage, setFeedbackMessage] = useState('');

  const [feedbackMessageType, setFeedbackMessageType] = useState(''); // 'success' or 'error'

  useEffect(() => {
    if (mapRef.current && !mapRef.current._leaflet_id) {
      const map = L.map(mapRef.current, {
        scrollWheelZoom: false, // Disable scroll wheel zoom
        center: [38.66214021803797, -9.2070192353163],
        zoom: 16
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: mapIcon,
        iconSize: [100, 100],
        iconAnchor: [45, 85],
        popupAnchor: [1, -50]
      });

      L.marker([38.66214021803797, -9.2070192353163], { icon: customIcon })
        .addTo(map)
        .bindPopup('<div class="custom-popup"><a href="https://www.google.com/maps/?q=38.66214021803797,-9.2070192353163" target="_blank">Open in Google Maps</a></div>')
    }


  }, []);





  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields have values
    const fromName = form.current.querySelector('input[name="from_name"]').value.trim();
    const fromEmail = form.current.querySelector('input[name="from_email"]').value.trim();
    const message = form.current.querySelector('textarea').value.trim();

    if (!fromName || !fromEmail || !message) {
      // If any field is empty, set an error message and do not submit
      setFeedbackMessage(t('contacts-page.fill-all-fields'));
      setFeedbackMessageType('error');
      return; // Stop the function from proceeding
    }

    // Proceed with form submission if all fields have values
    setFormSubmitting(true);
    setFeedbackMessage('');
    setFeedbackMessageType('');

    emailjs.sendForm('service_b657amf', 'template_x1zmjzo', form.current, 'jgCfBy5PqaFtqL4aW')
      .then((result) => {
        setFeedbackMessage(t('contacts-page.send-success'));
        setFeedbackMessageType('success');
        setFormSubmitting(false);
        form.current.reset(); // Reset the form fields
      }, (error) => {
        setFeedbackMessage(t('contacts-page.send-error'));
        setFeedbackMessageType('error');
        setFormSubmitting(false);
      });
  };



  return (
    <div>
      <div className='contacts-page-container'>

        <div className='contacts-content'>

          <div className='contact-form-section'>
            <h2 className="form-title">{t('contacts-page.form-title')}</h2>
            {feedbackMessage && (<div style={{ color: feedbackMessageType === 'success' ? 'green' : 'red' }}>
              {feedbackMessage}
            </div>)}
            <form className='contact-form' ref={form} onSubmit={sendEmail}>

              <input type='text' placeholder={t('contacts-page.form-subject')} name="from_name" />

              <input type='email' placeholder={t('contacts-page.form-email')} name="from_email" />

              <textarea placeholder={t('contacts-page.form-message')}></textarea>
              <button type='submit'>{t('contacts-page.form-send')} </button>
            </form>
          </div>

          <div className='contact-info-section'>
            <h2 className="contacts-page-title info-title">{t('contacts-page.page-title')}</h2>
            <div className="contact-info-columns">
              <div>
                <h3>{t('contacts-page.team-email')}</h3>
                <p>{"formulastudent@ae.fct.unl.pt"}</p>
              </div>
              <div>
                <h3>{t('contacts-page.cr-email')}</h3>
                <p>{"cr.formualstudent@ae.fct.unl.pt"}</p>
              </div>
              <div>
                <h3>{t('contacts-page.team-hq')}</h3>
                <div className="first-line">Faculdade de Ciências e Tecnologia</div>
                <div className="second-line">2829-516 Caparica</div>
              </div>
              <div>
                <h3 >{t('contacts-page.team-sm')}</h3>
                <div className="contact-info-columns">
                  <div>
                    <h4 >{"Instagram"}</h4>
                    <div className='sm'><a href="https://www.instagram.com/novaformulastudent?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">@novaformulastudent</a></div>
                  </div>
                  <div>
                    <h4  >{t("LinkedIn")}</h4>
                    <div className='sm'><a href="https://www.linkedin.com/company/formula-student-fct/" target="_blank" rel="noopener noreferrer">Nova Formula Student</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='google-maps-section' id="map" ref={mapRef} style={{ height: '50vh', width: '100%' }}></div>
    </div>
  );
}

export default ContactsPage;
