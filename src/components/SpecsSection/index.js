import React from "react";
import "./style.css";

const carColorMap = {
  dragon: "#19ff38",
  fenix: "#19a3ff",
  fenix_evo: "TBD",//TODO escolher a cor certa para este carro
};

function getStyle(car) {
  const style = {
    backgroundImage: `linear-gradient(to right, ${carColorMap[car]}, #ffffff)`,
  };
  return style;
}

const SpecsSection = ({ title, dataKeys, t, car }) => {
  return (
    <div className="specs-section">
      <h2 style={getStyle(car)}>
        {t(`fs${car}-page.technical-specs.${title}.title`)}
      </h2>
      <ul>
        {dataKeys.map((key) => (
          <li key={key}>
            {t(`fs${car}-page.technical-specs.${title}.${key}`)}:{" "}
            {t(`fs${car}-page.technical-specs.${title}.${key}-value`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecsSection;
