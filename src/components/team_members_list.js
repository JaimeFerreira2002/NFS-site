import placeholder from '../assets/images/members_photos/placeholder.png'
import * as fotos from '../fotos'

const TeamListData = [
  {
    title: 'board',
    members: [
      { name: 'Ricardo Cutileiro', role: 'team-leader&project-manager', imageSrc: require('../assets/images/members_photos/board/cutileiro.jpg') },
      { name: 'João Balbino', role: 'technical-director&team-leader', imageSrc: fotos.Joao_Balbino }, 
      { name: 'Miguel Pereira', role: 'technical-director', imageSrc: placeholder },
      { name: 'Sergiu Nica', role: 'bsd', imageSrc: fotos.Sergiu_Nica },
    ],
  },

  /* ///////Techincal//////// */
  {
    title: 'aerodynamics',
    members: [
      { name: 'Afonso Dinis', role: 'dep-leader', imageSrc: require('../assets/images/members_photos/aerodynamics/afonso_dinis.jpg') },
      { name: 'Ângela Rodrigues', role: 'member', imageSrc: fotos.Angela_Rodrigues },
      { name: 'João Gaspar', role: 'member', imageSrc: placeholder },
      { name: 'Mário Fonseca', role: 'member', imageSrc: fotos.Mario_Fonseca },
      { name: 'Miguel Lourenço', role: 'member', imageSrc: fotos.Miguel_Lourenco },
      { name: 'Francisco Rodrigues', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Peixe', role: 'member', imageSrc: fotos.Diogo_Peixe },
    ],
  },

  {
    title: 'chassis&suspension',
    members: [
      { name: 'João Rodrigues', role: 'dep-leader', imageSrc: fotos.Joao_Rodrigues },
      { name: 'Mariana Inácio', role: 'member', imageSrc: fotos.Mariana_Inacio },
      { name: 'Rafael Jordão', role: 'member', imageSrc: fotos.Rafael_Jordao },
      { name: 'Carlos Barbosa', role: 'member', imageSrc: fotos.Carlos_Barbosa },
      { name: 'Manuel Santos', role: 'member', imageSrc: fotos.Manuel_Tiago_Santos },
      { name: 'Martim Matias', role: 'member', imageSrc: fotos.Martim_Matias },
    ],
  },

  {
    title: 'vehicle-dynamics',
    members: [
      { name: 'Frederico Firmino', role: 'dep-leader', imageSrc: require('../assets/images/members_photos/vd/frederico_firmino.jpg') },
      { name: 'Gonçalo Ribeiro', role: 'member', imageSrc: require('../assets/images/members_photos/vd/goncalo_ribeiro.jpg') },
      { name: 'Cláudio Ribeiro', role: 'member', imageSrc: require('../assets/images/members_photos/vd/claudio_ribeiro.jpg') },
    ],
  },

  {
    title: 'steering&ergonomics',
    members: [
      { name: 'Pedro Marçal', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Pedro Marques', role: 'member', imageSrc: placeholder },
      { name: 'Vasco Louro', role: 'member', imageSrc: fotos.Vasco_Louro },
      { name: 'Beatriz Moniz', role: 'member', imageSrc: fotos.Beatriz_Moniz },
      { name: 'Guilherme Santiago', role: 'member', imageSrc: placeholder },
      { name: 'Gonçalo Coelho', role: 'member', imageSrc: fotos.Goncalo_Coelho },

    
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
      { name: 'David Amaral', role: 'member', imageSrc: require('../assets/images/members_photos/electronics/david_amaral.jpg') },
    ],
  },

  {
    title: 'powertrain',
    members: [
      { name: 'Gonçalo Correia', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Lourenço Vaz Tomé', role: 'member', imageSrc: placeholder },
      { name: 'João Vau', role: 'member', imageSrc: placeholder },
      { name: 'João Castro', role: 'member', imageSrc: placeholder },
      { name: 'Gustavo Guido', role: 'member', imageSrc: placeholder },
      { name: 'João Cabral', role: 'member', imageSrc: fotos.Joao_Cabral },
      { name: 'Ricardo Cascais', role: 'member', imageSrc: fotos.Ricardo_Cascais },
      { name: 'Carmo Cadilha', role: 'member', imageSrc: fotos.Carmo_Cadilha },
    ],
  },


  /* ///////BS//////// */
  {
    title: 'marketing',
    members: [
      { name: 'Jaime Ferreira', role: 'dep-leader', imageSrc: fotos.Jaime_Ferreira },
      { name: 'João Garcia', role: 'member', imageSrc: fotos.Joao_Garcia },
      { name: 'Miguel Santos', role: 'member', imageSrc: placeholder },
      { name: 'Rita Mendes', role: 'member', imageSrc: fotos.Rita_Mendes },
      { name: 'Diogo Gouveia', role: 'member', imageSrc: require('../assets/images/members_photos/marketing/diogo_gouveia.jpg') },
      { name: 'Pedro Matos', role: 'member', imageSrc: fotos.Pedro_Matos },
      { name: 'Tomás Pratas', role: 'member', imageSrc: fotos.Tomas_Pratas },
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

  {
    title: 'finances',
    members: [
          {name: 'Carolina Costa' , role: 'dep-leader' , imageSrc: fotos.Carolina_Costa,},             
        ],
  }, 
  ];
  
  export default TeamListData;