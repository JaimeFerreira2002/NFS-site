import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";


const FSFenixPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>FSFenix Page</h2>
      <p>This is the FSFENIX page. Content goes here.</p>
    </div>
  );
};

export default FSFenixPage;
