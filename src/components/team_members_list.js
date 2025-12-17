import placeholder from '../assets/images/members_photos/placeholder.png'
import * as fotos from '../fotos'

const TeamListData = []

  TeamListData.novaev01 = [
  {
    title: 'board',
    members: [
      { name: 'Martim Costa', role: 'team-leader', imageSrc: fotos.Martim_Costa },
      { name: 'Afonso Dinis', role: 'technical-director', imageSrc: fotos.Afonso_Dinis }, 
      { name: 'Carmo Cadilha', role: 'project-manager', imageSrc: fotos.Carmo_Cadilha },
      { name: 'Simão Correia', role: 'bsd', imageSrc: placeholder },
    ],
  },

  /* ///////Techincal//////// */
  {
    title: 'aerodynamics',
    members: [
      { name: 'Mário Fonseca', role: 'dep-leader', imageSrc: fotos.Mario_Fonseca },
      { name: 'Diogo Peixe', role: 'member', imageSrc: fotos.Diogo_Peixe },
      { name: 'Miguel Lourenço', role: 'member', imageSrc: fotos.Miguel_Lourenco },
      { name: 'Alexandre Rusu', role: 'member', imageSrc: placeholder },
      { name: 'José Tavares', role: 'member', imageSrc: placeholder },
      { name: 'Tomás Pinto', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'chassis',
    members: [
      { name: 'Martim Matias', role: 'dep-leader', imageSrc: fotos.Martim_Matias },
      { name: 'Joaquim Nascimento', role: 'member', imageSrc: placeholder },
      { name: 'Pedro Fidalgo', role: 'member', imageSrc: placeholder },
      { name: 'Rafael Jordão', role: 'member', imageSrc: fotos.Rafael_Jordao },
      { name: 'Carlos Barbosa', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'vehicle-dynamics',
    members: [
      { name: 'Manuel Santos', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Francisco Almeida', role: 'member', imageSrc: placeholder },
      { name: 'Tiago Alves', role: 'member', imageSrc: placeholder },
      { name: 'Tiago Valadas', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'suspension',
    members: [
      { name: 'João Xisto', role: 'dep-leader', imageSrc: placeholder },
      { name: 'João Barroso', role: 'member', imageSrc: placeholder },
      { name: 'Ricardo Ferreira', role: 'member', imageSrc: placeholder },
      { name: 'Simão Cruz', role: 'member', imageSrc: placeholder },
      { name: 'Guilherme Faria', role: 'member', imageSrc: placeholder },
      { name: 'Gonçalo Correia', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'electronics',
    members: [
      { name: 'Pedro Fernandes', role: 'dep-leader', imageSrc: require('../assets/images/members_photos/electronics/pedro_fernandes.jpg') },
      { name: 'Miguel Caldeirinha', role: 'member', imageSrc: placeholder },
      { name: 'Tiago Mega', role: 'member', imageSrc: fotos.Tiago_Mega },
      { name: 'Inês Monteiro', role: 'member', imageSrc: fotos.Ines_Monteiro },
      { name: 'Rodrigo Mendão', role: 'member', imageSrc: fotos.Rodrigo_Mendao },
    ],
  },

  {
    title: 'powertrain',
    members: [
      { name: 'David Amaral', role: 'dep-leader', imageSrc: require('../assets/images/members_photos/electronics/david_amaral.jpg') },
      { name: 'Lourenço Matias ', role: 'member', imageSrc: placeholder },
      { name: 'Simão Narciso', role: 'member', imageSrc: placeholder },
      { name: 'Tomás Martinho', role: 'member', imageSrc: placeholder },
      { name: 'Wang Nuo', role: 'member', imageSrc: placeholder },
    ],
  },


  /* ///////BS//////// */
  {
    title: 'marketing',
    members: [
      { name: 'Rita Mendes', role: 'dep-leader', imageSrc: fotos.Rita_Mendes },
      { name: 'Jaime Ferreira', role: '', imageSrc: fotos.Jaime_Ferreira },
      { name: 'João Garcia', role: 'member', imageSrc: fotos.Joao_Garcia },
      { name: 'Miguel Santos', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Gouveia', role: 'member', imageSrc: require('../assets/images/members_photos/marketing/diogo_gouveia.jpg') },
      { name: 'Pedro Matos', role: 'member', imageSrc: fotos.Pedro_Matos },
      { name: 'Leonor Ribeiro', role: 'member', imageSrc: placeholder },
    ],
  },
    
  {
    title: 'corporate-relations',
    members: [
      { name: 'Tomás Sousa', role: 'dep-leader', imageSrc: fotos.Tomas_Sousa },
      { name: 'Francisco Jorge', role: 'member', imageSrc: require('../assets/images/members_photos/cr/francisco_jorge.jpg') },
      { name: 'Rafael Rato', role: 'member', imageSrc: placeholder },
      { name: 'Laura Galvão', role: 'member', imageSrc: fotos.Laura_Galvao },
      { name: 'Mariana Santos', role: 'member', imageSrc: fotos.Mariana_Santos },
    ],
  },
    
  {
    title: 'logistics',
    members: [
      { name: 'Mariana Ribeiro', role: 'dep-leader', imageSrc: fotos.Mariana_Ribeiro },
      { name: 'Gabriela Gonçalves', role: 'member' , imageSrc: fotos.Gabriela_Gonçalves },             
      { name: 'Vitor Raimundo', role: 'member', imageSrc: fotos.Vitor_Raimundo },
      { name: 'Inês Marques', role: 'member', imageSrc: placeholder },
      { name: 'João Barroso', role: 'member', imageSrc: fotos.Joao_Barroso },
      { name: 'Madalena Silva', role: 'member', imageSrc: fotos.Madalena_Silva },
    ],
  }, 
];
  
  export default TeamListData;