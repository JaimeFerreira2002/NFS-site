// src/data/departments.js
import mktImage from "../../assets/cartazesRecrutamento/mkt.JPG"; 
import eletroImage from "../../assets/cartazesRecrutamento/eletro.JPG";
import operationsImage from "../../assets/cartazesRecrutamento/Operations.JPG";
import aeroImage from "../../assets/cartazesRecrutamento/aero.JPG";
import scImage from "../../assets/cartazesRecrutamento/SC.JPG";
import vdImage from "../../assets/cartazesRecrutamento/vd.JPG";
import crImage from "../../assets/cartazesRecrutamento/CR.JPG";
import logisticsImage from "../../assets/cartazesRecrutamento/logistics.JPG";
import powertrainImage from "../../assets/cartazesRecrutamento/powertrain.JPG";
import suspensionImage from "../../assets/cartazesRecrutamento/Suspension.JPG";


const departments = [
  {
    title: "mkt",
    name: "Marketing",
    imgSrc: mktImage,
    link: "/department/mkt",
    coordenador: "Jaime Ferreira",
  },
  {
    title: "Eletro",
    name: "Electronics",
    imgSrc: eletroImage,
    link: "/department/Eletro",
    coordenador: "",
  },
  {
    title: "Aero",
    name: "Aerodynamics",
    imgSrc: aeroImage,
    link: "/department/Aero",
    coordenador: "Afonso Dinis",
  },
  {
    title: "Operations",
    name: "Operations",
    imgSrc: operationsImage,
    link: "/department/operations",
    coordenador: "Mariana Inácio",
   
  },
  {
    title: "Suspension",
    name: "Suspension",
    imgSrc: suspensionImage,
    link: "/department/suspension",
    coordenador: "Vasco Louro",
  },

  {
    title: "cr",
    name: "Corporate Relations",
    imgSrc: crImage,
    link: "/department/cr",
    coordenador: "Tomás Sousa",
  },

  {
    title: "logistics",
    name: "Logistics",
    imgSrc: logisticsImage,
    link: "/department/logistics",
    coordenador: "Mariana Ribeiro",
  },

  {
    title: "powertrain",
    name: "Powertrain",
    imgSrc: powertrainImage,
    link: "/department/powertrain",
    coordenador: "João Cabral & Miguel Caldeirinha",
  },

  {
    title: "SC",
    name: "Software and Control",
    imgSrc: scImage,
    link: "/department/SC",
    coordenador: "",
  },

  {
    title: "vd",
    name: "Vehicle Dynamics",
    imgSrc: vdImage,
    link: "/department/vd",
    coordenador: "Gonçalo Ribeiro",
  },
];

export default departments;
