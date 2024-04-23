import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

const RecruitmentPage = () => {
  const positions = [
    {
      title: "Position1",
      description:
        "As a Marketing Team Member for our Formula Student Team, you will play a pivotal role in promoting our team's achievements, building brand awareness, and establishing a strong online and offline presence. This position requires a dynamic individual with a passion for motorsports, excellent communication skills, and a creative mindset. The Marketing Team Member will collaborate with other team members to develop and implement marketing strategies aimed at engaging the target audience, sponsors, and the broader motorsports community.",
      team: "Marketing",
      responsibilities: [
        "Content Creation",
        "Social Media Management",
        "Public Relations",
        "Event Coordination",
        "Sponsorship Activation",
        "Brand Management",
      ],
    },
    {
      title: "Position2",
      description:
        "As a Marketing Team Member for our Formula Student Team, you will play a pivotal role in promoting our team's achievements, building brand awareness, and establishing a strong online and offline presence. This position requires a dynamic individual with a passion for motorsports, excellent communication skills, and a creative mindset. The Marketing Team Member will collaborate with other team members to develop and implement marketing strategies aimed at engaging the target audience, sponsors, and the broader motorsports community.",
      team: "Marketing",
      responsibilities: [
        "Content Creation",
        "Social Media Management",
        "Public Relations",
        "Event Coordination",
        "Sponsorship Activation",
        "Brand Management",
      ],
    },
    {
      title: "Position3",
      description:
        "As a Marketing Team Member for our Formula Student Team, you will play a pivotal role in promoting our team's achievements, building brand awareness, and establishing a strong online and offline presence. This position requires a dynamic individual with a passion for motorsports, excellent communication skills, and a creative mindset. The Marketing Team Member will collaborate with other team members to develop and implement marketing strategies aimed at engaging the target audience, sponsors, and the broader motorsports community.",
      team: "Marketing",
      responsibilities: [
        "Content Creation",
        "Social Media Management",
        "Public Relations",
        "Event Coordination",
        "Sponsorship Activation",
        "Brand Management",
      ],
    },
    {
      title: "Position4",
      description:
        "As a Marketing Team Member for our Formula Student Team, you will play a pivotal role in promoting our team's achievements, building brand awareness, and establishing a strong online and offline presence. This position requires a dynamic individual with a passion for motorsports, excellent communication skills, and a creative mindset. The Marketing Team Member will collaborate with other team members to develop and implement marketing strategies aimed at engaging the target audience, sponsors, and the broader motorsports community.",
      team: "Marketing",
      responsibilities: [
        "Content Creation",
        "Social Media Management",
        "Public Relations",
        "Event Coordination",
        "Sponsorship Activation",
        "Brand Management",
      ],
    },
  ];
  const { t } = useTranslation();
  const positionList = (
    <Row style={{ margin: "auto" }}>
      {positions.map((position) => (
        <Card
          bg="dark"
          text="white"
          key={position.title}
          style={{ width: "30rem", marginBottom: "5rem", borderColor:"#419ed4" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{position.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {position.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {position.responsibilities.map((resp) => (
              <ListGroup.Item style={{backgroundColor: "#212529", color:"white", borderColor:"#419ed4"}} key={resp}>{resp}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ))}
    </Row>
  );
  return (
    <div>
      <div className="title">{t("recruitment-page.page-title")}</div>
      <div className="subtitle">{t("recruitment-page.page-subtitle")}</div>
      <div className="positions" style={{ justifyContent: "center" }}>
        {positionList}
      </div>
    </div>
  );
};

export default RecruitmentPage;
