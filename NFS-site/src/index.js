import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from './languages/pt.json';
import enTranslation from './languages/en.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//this could be in its own file, but doesnt make a difference
i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptTranslation },
      en: { translation: enTranslation },
    },
    lng: 'pt', // default language
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

