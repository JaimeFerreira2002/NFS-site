import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card"; // Import Bootstrap Card component
import departments from "../../pages/DepartmentPage/departments"; // Import department data
import PageHeader from "../../components/PageHeader/index.js";

const DepartmentPage = () => {
  const { departmentName } = useParams(); // Capture the department name from the URL
  const { t } = useTranslation(); // Move this hook to the top before any conditional logic

  // Find the specific department from the list
  const department = departments.find(dept => dept.title.toLowerCase() === departmentName.toLowerCase());

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <div className="department-page">
      <PageHeader
        title={department.name}
        gradientColor={"#19a3ff"}
      />
    
      {department.coordenador && department.coordenador.trim() !== "" && (
        <>
          <h2 className="coordenador">{t("DepartmentPage.coordenador")}</h2>
          <h2 className="coordenador-name">{department.coordenador}</h2>
        </>
      )}
      {/* Card containing the image */}
      <Card className="department-card">
        <Card.Img
          variant="top"
          src={department.imgSrc}
          alt={`${department.title} image`}
          className="department-image"
        />
      </Card>
      <p className="dep-disc">
        {t("DepartmentPage.disc" + department.title.toLowerCase())}
      </p>
      <div className="button-pos-dep">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScMwAEYXGpfIvQgLzFcns1R8xwy7q-ZqydVWkjMHSyR15yvxQ/viewform" className="button-link">
          <button className="recruitment-button-dep"><h2>{t('home.recruitment_button')}</h2></button>
        </a>

      </div>
    </div>
  );
};

export default DepartmentPage;
