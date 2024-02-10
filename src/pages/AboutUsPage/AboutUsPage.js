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
import eng_team_chart from "../../assets/images/org_chart_eng.drawio.png";
import pt_team_chart from "../../assets/images/org_chart_pt.drawio.png";

const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="page-about">
      <div className="section">
        <span style={{ display: "flow" }}>
          <h1 style={{ textAlign: "center", fontSize: "3.5rem" }}>
            {t("about-page.about-us")}
          </h1>
          <h3
            style={{ marginLeft: "12.5%", textAlign: "center", width: "75%" }}
          >
            {t("about-page.about-us-desc")}
          </h3>
        </span>
        <br></br>
        <br></br>
        <p>{t("home.description")}</p>
        <br></br>
        <h2>
          <strong>{t("home.team")}</strong>
        </h2>
        <img
          src={t("topbar.start") === "Home" ? eng_team_chart : pt_team_chart}
          alt="Team Organization"
        />
        <br></br>
        <br></br>
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
        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FontAwesomeIcon
                icon={faPenRuler}
                size="4x"
                color="#419ed4"
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
              {t("about-page.business-model-desc")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <FontAwesomeIcon
                icon={faTag}
                size="4x"
                color="#419ed4"
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
              {t("about-page.cost-manufacturing-desc")}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <FontAwesomeIcon
                icon={faChartLine}
                size="4x"
                color="#419ed4"
                style={{ paddingRight: " 2rem" }}
              />
              <span style={{ display: "flex" }}>
                <h4>{t("about-page.engineering-design")}</h4>
                <small style={{ padding: "0.5rem" }}>
                  150 {t("about-page.points")}
                </small>
              </span>
            </Accordion.Header>
            <Accordion.Body>{t("about-page.engineering-desc")}</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <br></br>
        <br></br>
        <h3 style={{ textAlign: "center" }}>
          <strong>{t("about-page.dynamic-events")}</strong>
        </h3>
        <br></br>
        <p>{t("about-page.dynamic-ev-desc")}</p>
        <br></br>

        <Accordion defaultActiveKey="-1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FontAwesomeIcon
                icon={faGaugeHigh}
                size="4x"
                color="#419ed4"
                style={{ paddingRight: "2rem" }}
              />
              <span style={{ display: "flex" }}>
                <h4>{t("about-page.acceleration")}</h4>
                <small style={{ padding: "0.5rem" }}>
                  75 {t("about-page.points")}
                </small>
              </span>
            </Accordion.Header>
            <Accordion.Body>{t("about-page.acceleration-desc")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FontAwesomeIcon
                icon={faCarSide}
                size="4x"
                color="#419ed4"
                style={{ paddingRight: "1.4rem" }}
              />
              <span style={{ display: "flex" }}>
                <h4>{t("about-page.skidpad")}</h4>
                <small style={{ padding: "0.5rem" }}>
                  75 {t("about-page.points")}
                </small>
              </span>
            </Accordion.Header>
            <Accordion.Body>{t("about-page.skidpad-desc")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <FontAwesomeIcon
                icon={faCar}
                size="4x"
                color="#419ed4"
                style={{ paddingRight: "2rem" }}
              />
              <span style={{ display: "flex" }}>
                <h4>{t("about-page.autocross")}</h4>
                <small style={{ padding: "0.5rem" }}>
                  100 {t("about-page.points")}
                </small>
              </span>
            </Accordion.Header>
            <Accordion.Body>{t("about-page.autocross-desc")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <FontAwesomeIcon
                icon={faRoad}
                size="4x"
                color="#419ed4"
                style={{ paddingRight: "1.7rem" }}
              />

              <span style={{ display: "flex" }}>
                <h4>{t("about-page.efficiency")}</h4>
                <small style={{ padding: "0.5rem" }}>
                  100 {t("about-page.points")}
                </small>
              </span>
            </Accordion.Header>
            <Accordion.Body>{t("about-page.efficiency-desc")}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <FontAwesomeIcon
                icon={faBatteryHalf}
                size="4x"
                color="#419ed4"
                style={{ paddingRight: "1.8rem" }}
              />
              <span style={{ display: "flex" }}>
                <h4>{t("about-page.endurance")}</h4>
                <small style={{ padding: "0.5rem" }}>
                  300 {t("about-page.points")}
                </small>
              </span>
            </Accordion.Header>
            <Accordion.Body>{t("about-page.endurance-desc")}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default AboutUsPage;
