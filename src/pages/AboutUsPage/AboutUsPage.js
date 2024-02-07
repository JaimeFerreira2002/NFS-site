import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faTag,
  faPenRuler,
  faChartLine,
  faGaugeHigh, 
  faCarSide,
  faBatteryHalf,
  faFlagCheckered,
  faRoad,
  faCar,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { OrganizationChart } from "primereact/organizationchart";

const AboutUsPage = () => {
  const data = [
    {
      label: "Team Leader",
      expanded: true,
      children: [
        {
          label: "Techinical Director",
          expanded: true,
          children: [
            {
              label: "Electronics",
            },
            {
              label: "Steering & Ergonomics",
            },
            {
              label: "Chassis",
            },
            {
              label: "Powertrain",
            },
            {
              label: "Aerodynamics",
            },
            {
              label: "Vehicle Dynamics",
            },
          ],
        },
        {
          label: "Business & Strategy Director",
          expanded: true,
          children: [
            {
              label: "Marketing",
            },
            {
              label: "Logistics",
            },
            {
              label: "Finance",
            },
            {
              label: "Corporate Relations",
            },
          ],
        },
      ],
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="page-about">
      <div className="section">
        <span style={{display:"flow"}}>
        <h1 style={{ textAlign: "center", fontSize:"3.5rem" }}>{t("about-page.about-us")}</h1>
        <h3 style={{marginLeft:"12.5%", textAlign: "center", width:"75%"}}>{t("about-page.about-us-desc")}</h3>
        </span>
        <br></br>
        <br></br>
        <p>{t("home.description")}</p>
        <br></br>
        <h2>
          <strong>{t("home.team")}</strong>
        </h2>
        <br></br>
        <br></br>
        <div>
          <OrganizationChart value={data} style={{ margin: "auto" }} />
        </div>
        <h2>
          <strong>{t("about-page.how-it-works-title")}</strong>
        </h2>
        <p>{t("about-page.how-it-works-desc")}</p>

        <br></br>
        <br></br>
        <h3 style={{ textAlign: "center" }}>
          <strong>{t("about-page.static-events")}</strong>
        </h3>
        <br></br>
        <p>{t("about-page.static-ev-desc")}</p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faPenRuler}
            size="4x"
            color="#419ed4"
            style={{ paddingRight: "2rem" }}
          />
          <span>
            <span style={{ display: "flex" }}>
              <h4>{t("about-page.business-model")}</h4>
              <small style={{ padding: "0.5rem" }}>
                75 {t("about-page.points")}
              </small>
            </span>
            <span>{t("about-page.business-model-desc")}</span>
          </span>
        </p>
        <br></br>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faTag}
            size="4x"
            color="#419ed4"
            style={{ paddingRight: "2rem" }}
          />
          <span>
            <span style={{ display: "flex" }}>
              <h4>{t("about-page.cost-manufacturing")}</h4>
              <small style={{ padding: "0.5rem" }}>
                100 {t("about-page.points")}
              </small>
            </span>
              <span>{t("about-page.cost-manufacturing-desc")}</span>
          </span>
        </p>
        <br></br>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faChartLine}
            size="4x"
            color="#419ed4"
            style={{ paddingRight: " 2rem" }}
          />
          <span>
            <span style={{ display: "flex" }}>
              <h4>{t("about-page.engineering-design")}</h4>
              <small style={{ padding: "0.5rem" }}>
                150 {t("about-page.points")}
              </small>
            </span>
              <span>{t("about-page.engineering-desc")}</span>
          </span>
        </p>
        <br></br>
        <br></br>
        <br></br>
        <h3 style={{ textAlign: "center" }}>
          <strong>{t("about-page.dynamic-events")}</strong>
        </h3>
        <br></br>
        <p>{t("about-page.dynamic-ev-desc")}</p>
        <br></br>

        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faGaugeHigh}
            size="4x"
            color="#419ed4"
            style={{ paddingRight: "2rem" }}
          />
          <span>
            <span style={{ display: "flex" }}>
              <h4>{t("about-page.acceleration")}</h4>
              <small style={{ padding: "0.5rem" }}>
                75 {t("about-page.points")}
              </small>
            </span>

            <span>{t("about-page.acceleration-desc")}</span>
          </span>
        </p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faCarSide}
            size="4x"
            color="#419ed4"
            style={{ paddingRight: "1.4rem" }}
          />
          <span>
            <span style={{ display: "flex" }}>
              <h4>{t("about-page.skidpad")}</h4>
              <small style={{ padding: "0.5rem" }}>
                75 {t("about-page.points")}
              </small>
            </span>
            <span>{t("about-page.skidpad-desc")}</span>
          </span>
        </p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faCar}
            size="4x"
            color="#419ed4"
            style={{ paddingRight: "2rem" }}
          />
          <span>
            <span style={{ display: "flex" }}>
              <h4>{t("about-page.autocross")}</h4>
              <small style={{ padding: "0.5rem" }}>
                100 {t("about-page.points")}
              </small>
            </span>
            <span>{t("about-page.autocross-desc")}</span>
          </span>
        </p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faRoad}
            size="4x"
            color="#419ed4"
            style={{ paddingRight: "1.7rem" }}
          />
          <span>
            <span style={{ display: "flex" }}>
              <h4>{t("about-page.efficiency")}</h4>
              <small style={{ padding: "0.5rem" }}>
                100 {t("about-page.points")}
              </small>
            </span>
            <span>{t("about-page.efficiency-desc")}</span>
          </span>
        </p>
        <br></br>
        <p style={{ display: "flex" }}>
          <FontAwesomeIcon
            icon={faBatteryHalf}
            size="4x"
            color="#419ed4"
            style={{ paddingRight: "1.8rem" }}
          />
          <span>
            <span style={{ display: "flex" }}>
              <h4>{t("about-page.endurance")}</h4>
              <small style={{ padding: "0.5rem" }}>
                300 {t("about-page.points")}
              </small>
            </span>
            <span>{t("about-page.endurance-desc")}</span>
          </span>
        </p>
        <br></br>
      </div>
    </div>
  );
};

export default AboutUsPage;
