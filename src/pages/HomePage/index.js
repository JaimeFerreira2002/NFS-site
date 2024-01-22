import React from "react";
import "./style.css";
import NFSLogo from "../../assets/images/NFSLogo.png";
import NOVALogo from "../../assets/images/NOVA_logo.png";
import TeamLeaderPhoto from "../../assets/images/members_photos/Ricardo_Cutileiro_TL.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Car_Render from "../../assets/images/car_render_bridge.jpg";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      {/* Add your background image and text overlay here */}
      <div className="sobre">
        <div className="description">
          <div>
            <br></br>
          </div>
          <div className="text">
            <h1>{t("home.who_r_we")}</h1>

            <h4 className="subtitle">{t("home.fs_team")}</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nisl lectus, viverra ut massa sed, condimentum imperdiet diam. Sed
              sem massa, laoreet in lobortis eu, ultrices nec lectus. Duis eget
              mauris vel risus hendrerit venenatis eu ac mauris. Mauris quam
              purus, vulputate vitae accumsan ac, laoreet vitae turpis. Nunc
              faucibus, nibh quis aliquam tincidunt, libero risus congue dui, id
              suscipit elit odio vel magna. Duis suscipit purus id augue
              porttitor rutrum. Donec at varius est. Donec rhoncus lacinia nisi
              non facilisis. Nullam porta, nisl sed euismod pellentesque, dolor
              tortor mattis dui, id laoreet quam quam dignissim erat. Donec
              ornare nisl sed facilisis sodales. Aliquam vitae sem a nunc
              iaculis condimentum. Aenean maximus iaculis interdum. Mauris
              tincidunt fringilla libero at dictum.
            </span>
          </div>
          <div>
            <img className="logoNFS" src={NFSLogo} alt="NFS" />
            <img className="logoNOVA" src={NOVALogo} alt="NFS" />
          </div>
        </div>
      </div>
      <div className="team">
        <div>
          <Link style={{ textDecoration: "none", color: "black" }} to="/team">
            <Card
              className="card"
              bg="dark"
              text="white"
              border="info"
              style={{ width: "20rem" }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "left" }}>
                  <h2>
                    <strong>{t("home.team")}</strong>
                  </h2>
                </Card.Title>
                <br></br>
                <Card.Text style={{ textAlign: "justify" }}>
                  {t("home.team_desc")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>

        <div>
          <Link style={{ textDecoration: "none", color: "black" }} to="/team">
            <img
              className="teamLeaderPhoto"
              src={TeamLeaderPhoto}
              alt="Ricardo Cutileiro - Team Leader"
            />
            <br></br>
            <strong>Ricardo Cutileiro</strong>
            <br></br>
            <label>{t("home.team_leader")}</label>
          </Link>
        </div>
      </div>
      <div className="sponsors">
        <div>
        <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/partners"
              >
          <Card
            className="card"
            bg="dark"
            text="white"
            border="info"
            style={{ width: "20rem" }}
          >
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                <h2>
                  <strong>{t("home.sponsor_title")}</strong>
                </h2>
              </Card.Title>
              <br></br>
              <Card.Text style={{ textAlign: "justify" }}>
                {t("home.sponsor_text")}
              </Card.Text>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/recruitment"
              >
                <Button className="btn" variant="info">
                  {t("home.reach_us")}
                </Button>
              </Link>
            </Card.Body>
          </Card>
          </Link>
        </div>
      </div>
      <div className="garage">
        <div>
          <Card
            className="card"
            bg="dark"
            text="white"
            border="info"
            style={{ width: "20rem" }}
          >
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                <h2>
                  <strong>A Garagem</strong>
                </h2>
              </Card.Title>
              <br></br>
              <Card.Text style={{ textAlign: "justify" }}>
                Tendo voltado à competição há pouco tempo, o carro que queremos
                apresentar o FSFenix. Este carro é o resultado de um ano de
                trabalho, e é o primeiro carro da equipa.
                <strong>
                  Esperamos poder produzir mais carros como este, e melhorar a
                  cada ano que passa.
                </strong>
              </Card.Text>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/garage"
              ></Link>
            </Card.Body>
          </Card>
        </div>

        <div className="cards-container">
          <div
            className="garage-item"
            id="garage-item1"
            style={{
              backgroundImage: `url(${Car_Render})`,
            }}
          >
            <div className="overlay">
              <h2>FS FENIX</h2>
              <p>{t("garage-page.fenix-description")}</p>

              <Link to="/garage">
                <button>{t("garage-page.button-text")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
