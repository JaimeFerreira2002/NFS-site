import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./style.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeader from "../../components/PageHeader/index.js";

// Import the departments data
import departments from "../../pages/DepartmentPage/departments.js";

const RecruitmentPage = () => {
  const { t } = useTranslation();
  
  const positionList = (
    <Row className="position-list" xs={1} sm={2} md={3} lg={4}>
      {departments.map((position) => (
        <Col key={position.title}>
          <Link to={position.link} className="card-link">
            <Card className="team-card">
              <div className="card-image-container">
                <Card.Img
                  variant="top"
                  src={position.imgSrc}
                  alt={`${position.title} Image`}
                  className="card-image"
                />
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="recruitment-page">
      <PageHeader
        title={t("recruitment-page.page-title")}
        subtitle={t("recruitment-page.page-subtitle")}
        gradientColor={"#19a3ff"}
      />


      <div className="positions">
        {positionList}
      </div>
      <div className="button-pos-dep">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScMwAEYXGpfIvQgLzFcns1R8xwy7q-ZqydVWkjMHSyR15yvxQ/viewform" className="button-link">
          <button className="recruitment-button-dep"><h2>{t('home.recruitment_button')}</h2></button>
        </a>
      </div>
    </div>
  );
};

export default RecruitmentPage;
