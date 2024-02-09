import placeholder from '../assets/images/members_photos/placeholder.png'


const TeamListData = [
  {
    title: 'board',
    members: [
      { name: 'Ricardo Cutileiro', role: 'team-leader', imageSrc: require('../assets/images/members_photos/board/cutileiro.jpg') },
      { name: 'João Balbino', role: 'technical-director', imageSrc: require('../assets/images/members_photos/board/balbino.jpg') },
      { name: 'Sergiu Nica', role: 'bsd', imageSrc: require('../assets/images/members_photos/board/sergiu.jpg') },
    ],
  },

  /* ///////Techincal//////// */
  {
    title: 'aerodynamics',
    members: [
      { name: 'Afonso Dinis', role: 'dep-leader', imageSrc: require('../assets/images/members_photos/aerodynamics/afonso_dinis.jpg') },
      { name: 'Ângela Rodrigues', role: 'member', imageSrc: placeholder },
      { name: 'João Gaspar', role: 'member', imageSrc: placeholder },
      { name: 'Mário Fonseca', role: 'member', imageSrc: require('../assets/images/members_photos/aerodynamics/mario_fonseca.jpg') },
      { name: 'Miguel Lourenço', role: 'member', imageSrc: require('../assets/images/members_photos/aerodynamics/miguel_lourenco.jpg') },
      { name: 'Francisco Rodrigues', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'chassis&suspension',
    members: [
      { name: 'Miguel Pereira', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Mariana Inácio', role: 'member', imageSrc: placeholder },
      { name: 'Rafael Jordão', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Fortes', role: 'member', imageSrc: placeholder },
      { name: 'João Rodrigues', role: 'member', imageSrc: placeholder },
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
      { name: 'Vasco Louro', role: 'member', imageSrc: require('../assets/images/members_photos/steering_and_ergonomics/vasco_louro.jpg') },
      { name: 'Beatriz Moniz', role: 'member', imageSrc: placeholder },
      { name: 'Gonçalo Coelho', role: 'member', imageSrc: require('../assets/images/members_photos/steering_and_ergonomics/goncalo_coelho.jpg') },

    
    ],
  },

  {
    title: 'electronics',
    members: [
      { name: 'Pedro Fernandes', role: 'dep-leader', imageSrc: require('../assets/images/members_photos/electronics/pedro_fernandes.jpg') },
      { name: 'Miguel Caldeirinha', role: 'member', imageSrc: placeholder },
      { name: 'Tiago Mega', role: 'member', imageSrc: placeholder },
      { name: 'Inês Monteiro', role: 'member', imageSrc: require('../assets/images/members_photos/electronics/ines_monteiro.jpg') },
      { name: 'João Cruz', role: 'member', imageSrc: require('../assets/images/members_photos/electronics/joao_cruz.jpg') },
      { name: 'Rodrigo Mendão', role: 'member', imageSrc: placeholder },
      { name: 'Roberto Teixeira', role: 'member', imageSrc: require('../assets/images/members_photos/electronics/roberto_teixeira.jpg') },
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
      { name: 'Henrique Ferreira', role: 'member', imageSrc: placeholder },
      { name: 'Gustavo Guido', role: 'member', imageSrc: placeholder },
      { name: 'João Cabral', role: 'member', imageSrc: placeholder },
      { name: 'Ricardo Cascais', role: 'member', imageSrc: placeholder },
      { name: 'Bernardo Henriques', role: 'member', imageSrc: require('../assets/images/members_photos/powertrain/bernardo_henriques.jpg') },
    ],
  },


  /* ///////BS//////// */
  {
    title: 'marketing',
    members: [
      { name: 'Jaime Ferreira', role: 'dep-leader', imageSrc: require('../assets/images/members_photos/marketing/jaime_ferreira.jpg') },
      { name: 'João Garcia', role: 'member', imageSrc: require('../assets/images/members_photos/marketing/joao_garcia.jpg') },
      { name: 'Miguel Santos', role: 'member', imageSrc: placeholder },
      { name: 'Rita Mendes', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Gouveia', role: 'member', imageSrc: require('../assets/images/members_photos/marketing/diogo_gouveia.jpg') },
      { name: 'Pedro Matos', role: 'member', imageSrc: placeholder },
      { name: 'Tomás Prata', role: 'member', imageSrc: require('../assets/images/members_photos/marketing/tomas_prata.jpg') },
    ],
  },
    
  {
    title: 'corporate-relations',
    members: [
      { name: 'Tomás Sousa', role: 'dep-leader', imageSrc: require('../assets/images/members_photos/cr/tomas_sousa.jpg') },
      { name: 'Francisco Jorge', role: 'member', imageSrc: require('../assets/images/members_photos/cr/francisco_jorge.jpg') },
      { name: 'Rafael Rato', role: 'member', imageSrc: placeholder },
      { name: 'Laura Galvão', role: 'member', imageSrc: require('../assets/images/members_photos/cr/laura_galvao.jpg') },
      { name: 'Leonor Ribeiro', role: 'member', imageSrc: placeholder },
    ],
  },
    
  {
    title: 'logistics',
    members: [
      { name: 'Diogo Algarvio', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Mariana Ribeiro', role: 'member', imageSrc: placeholder },
      { name: 'Inês Marques', role: 'member', imageSrc: placeholder },
    ],
  }, 

  {
    title: 'finances',
    members: [
          {name: 'Carolina Costa' , role: 'dep-leader' , imageSrc: require('../assets/images/members_photos/finances/carolina_costa.jpg'),},             
        ],
  }, 
  ];
  
  export default TeamListData;