import React from 'react';
import "./style.css";


const SpecsSection = ({ title, dataKeys, t }) => {
  return (
    <div className='specs-section'>
      <h2>{t(`fsfenix-page.technical-specs.${title}.title`)}</h2>
      <ul>
        {dataKeys.map((key) => (
          <li key={key}>{t(`fsfenix-page.technical-specs.${title}.${key}`)}: {t(`fsfenix-page.technical-specs.${title}.${key}-value`)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpecsSection;