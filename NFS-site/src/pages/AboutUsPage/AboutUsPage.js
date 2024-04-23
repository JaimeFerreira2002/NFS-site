import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faPenRuler,
  faChartLine,
  faGaugeHigh,
  faCarSide,
  faBatteryHalf,
  faRoad,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Accordion from "react-bootstrap/Accordion";
import eng_team_chart from "../../assets/images/org_chart_eng.drawio_desktop.png";
import pt_team_chart from "../../assets/images/org_chart_pt.drawio_desktop.png";
import BrigdeCar from '../../assets/images/car_render_bridge.jpg';
import MapComponent from '../../components/maps.js';

import PageHeader from '../../components/PageHeader/index.js';




const AboutUsPage = () => {

  const { t, i18n } = useTranslation();
  // Determine the class based on the current language
  const containerClass = `team-image-container ${i18n.language}`;

  return (

    <div className="page-about">
      <PageHeader title={t("about-page.about-us")} subtitle={t("about-page.about-us-desc")} gradientColor={'#19a3ff'} height={'20%'} />
      <div className="section">

        <div className="first-section">
          <div className="first-section-image-overlay"/>    
          <h2 className="title-first-section">{t("about-page.who-are-we")}</h2>
          <p className="text-first-section">{t("home.description")}</p>
        </div>   
    
        <div className="team-section-about">
          <div> <h2>
            <strong>{t("home.team")}</strong>
          </h2>
            <div id="teamImageContainer" className={containerClass}></div>
          </div>
        </div>

        <div className="how-it-works">
          <div><h2>
            <strong>{t("about-page.how-it-works-title")}</strong>
          </h2>
            <p>{t("about-page.how-it-works-desc")}</p>
          </div>
        </div>
        
        <div className="events">
          <div >
            <div>
              <h2>
                <strong>{t("about-page.static-events")}</strong>
              </h2>
              <p>{t("about-page.static-ev-desc")}</p></div>

          </div>

          <Accordion defaultActiveKey="-1" >
            <Accordion.Item eventKey="0" style={{ zIndex: "-1" }}>
              <Accordion.Header>
                <FontAwesomeIcon
                  icon={faPenRuler}
                  size="4x"
                  color="#286196"
                  style={{ paddingRight: "2rem" }}
                />

                <span style={{ display: "flex" }}>
                  <h4>{t("about-page.business-model")}</h4>
                  <small style={{ padding: "0.5rem" }}>
                    75 {t("about-page.points")}
                  </small>
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p>{t("about-page.business-model-desc")}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <FontAwesomeIcon
                  icon={faTag}
                  size="4x"
                  color="#286196"
                  style={{ paddingRight: "2rem" }}
                />
                <span style={{ display: "flex" }}>
                  <h4>{t("about-page.cost-manufacturing")}</h4>
                  <small style={{ padding: "0.5rem" }}>
                    100 {t("about-page.points")}
                  </small>
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p> {t("about-page.cost-manufacturing-desc")}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <FontAwesomeIcon
                  icon={faChartLine}
                  size="4x"
                  color="#286196"
                  style={{ paddingRight: " 2rem" }}
                />
                <span style={{ display: "flex" }}>
                  <h4>{t("about-page.engineering-design")}</h4>
                  <small style={{ padding: "0.5rem" }}>
                    150 {t("about-page.points")}
                  </small>
                </span>
              </Accordion.Header>
              <Accordion.Body><p>{t("about-page.engineering-desc")}</p></Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>

        <div className="events">
          <h2>
            <strong>{t("about-page.dynamic-events")}</strong>
          </h2>
          <br></br>
          <p>{t("about-page.dynamic-ev-desc")}</p>
          <br></br>

          <Accordion defaultActiveKey="-1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  size="4x"
                  color="#286196"
                  style={{ paddingRight: "2rem" }}
                />
                <span style={{ display: "flex" }}>
                  <h4>{t("about-page.acceleration")}</h4>
                  <small style={{ padding: "0.5rem" }}>
                    75 {t("about-page.points")}
                  </small>
                </span>
              </Accordion.Header>
              <Accordion.Body><p>{t("about-page.acceleration-desc")}</p></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <FontAwesomeIcon
                  icon={faCarSide}
                  size="4x"
                  color="#286196"
                  style={{ paddingRight: "1.4rem" }}
                />
                <span style={{ display: "flex" }}>
                  <h4>{t("about-page.skidpad")}</h4>
                  <small style={{ padding: "0.5rem" }}>
                    75 {t("about-page.points")}
                  </small>
                </span>
              </Accordion.Header>
              <Accordion.Body><p>{t("about-page.skidpad-desc")}</p></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <FontAwesomeIcon
                  icon={faCar}
                  size="4x"
                  color="#286196"
                  style={{ paddingRight: "2rem" }}
                />
                <span style={{ display: "flex" }}>
                  <h4>{t("about-page.autocross")}</h4>
                  <small style={{ padding: "0.5rem" }}>
                    100 {t("about-page.points")}
                  </small>
                </span>
              </Accordion.Header>
              <Accordion.Body><p>{t("about-page.autocross-desc")}</p></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <FontAwesomeIcon
                  icon={faRoad}
                  size="4x"
                  color="#286196"
                  style={{ paddingRight: "1.7rem" }}
                />

                <span style={{ display: "flex" }}>
                  <h4>{t("about-page.efficiency")}</h4>
                  <small style={{ padding: "0.5rem" }}>
                    100 {t("about-page.points")}
                  </small>
                </span>
              </Accordion.Header>
              <Accordion.Body><p>{t("about-page.efficiency-desc")}</p></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <FontAwesomeIcon
                  icon={faBatteryHalf}
                  size="4x"
                  color="#286196"
                  style={{ paddingRight: "1.8rem" }}
                />
                <span style={{ display: "flex" }}>
                  <h4>{t("about-page.endurance")}</h4>
                  <small style={{ padding: "0.5rem" }}>
                    300 {t("about-page.points")}
                  </small>
                </span>
              </Accordion.Header>
              <Accordion.Body><p>{t("about-page.endurance-desc")}</p></Accordion.Body>
            </Accordion.Item>
          </Accordion></div>

      </div>
    </div>
  );
};

export default AboutUsPage;
