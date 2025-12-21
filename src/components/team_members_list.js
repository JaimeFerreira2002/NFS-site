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
      { name: 'Alexandre Rusu', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Peixe', role: 'member', imageSrc: fotos.Diogo_Peixe },
      { name: 'Francisco Rodrigues', role: 'member', imageSrc: placeholder },
      { name: 'José Tavares', role: 'member', imageSrc: placeholder },
      { name: 'Miguel Lourenço', role: 'member', imageSrc: fotos.Miguel_Lourenco },
      { name: 'Tomás Pinto', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'chassis',
    members: [
      { name: 'Martim Matias', role: 'dep-leader', imageSrc: fotos.Martim_Matias },
      { name: 'Carlos Barbosa', role: 'member', imageSrc: fotos.Carlos_Barbosa },
      { name: 'Joaquim Nascimento', role: 'member', imageSrc: placeholder },
      { name: 'Pedro Fidalgo', role: 'member', imageSrc: placeholder },
      { name: 'Rafael Jordão', role: 'member', imageSrc: fotos.Rafael_Jordao },
    ],
  },

  {
    title: 'vehicle-dynamics',
    members: [
      { name: 'Manuel Santos', role: 'dep-leader', imageSrc: fotos.Manuel_Tiago_Santos },
      { name: 'Francisco Almeida', role: 'member', imageSrc: placeholder },
      { name: 'Tiago Alves', role: 'member', imageSrc: placeholder },
      { name: 'Tiago Valadas', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'suspension',
    members: [
      { name: 'João Xisto', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Gonçalo Correia', role: 'member', imageSrc: placeholder },
      { name: 'Guilherme Faria', role: 'member', imageSrc: placeholder },
      { name: 'João Barroso', role: 'member', imageSrc: fotos.Joao_Barroso },
      { name: 'Ricardo Ferreira', role: 'member', imageSrc: placeholder },
      { name: 'Simão Cruz', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'electronics',
    members: [
      { name: 'Bernardo Carmona', role: 'dep-leader', imageSrc: placeholder },
      { name: 'André Dimas', role: 'member', imageSrc: placeholder },
      { name: 'Frederico Henriques', role: 'member', imageSrc: placeholder },
      { name: 'João Garcia', role: 'member', imageSrc: fotos.Joao_Garcia },
      { name: 'Miguel Torres', role: 'member', imageSrc: placeholder },
      { name: 'Rafael Fortes', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'driverless',
    members: [
      { name: 'Jaime Ferreira', role: 'dep-leader', imageSrc: fotos.Jaime_Ferreira },
      { name: 'Dinis Dashkevych', role: 'member', imageSrc: placeholder },
      { name: 'João Barata', role: 'member', imageSrc: placeholder },
      { name: 'Tarik Tuna', role: 'member', imageSrc: placeholder }
    ],
  },

  {
    title: 'e-powertrain',
    members: [
      { name: 'David Amaral', role: 'dep-leader', imageSrc: fotos.David_Amaral },
      { name: 'Lourenço Matias', role: 'member', imageSrc: placeholder },
      { name: 'Simão Narciso', role: 'member', imageSrc: placeholder },
      { name: 'Tomás Martinho', role: 'member', imageSrc: placeholder },
      { name: 'Wang Nuo', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'm-powertrain',
    members: [
      { name: 'João Cabral', role: 'dep-leader', imageSrc: fotos.Joao_Cabral },
      { name: 'Carolina Patrão', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Casaleiro', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Ferreira', role: 'member', imageSrc: placeholder },
      { name: 'Guilherme Duarte', role: 'member', imageSrc: placeholder },
    ],
  },

  /* ///////BS//////// */
  {
    title: 'marketing',
    members: [
      { name: 'Rita Mendes', role: 'dep-leader', imageSrc: fotos.Rita_Mendes },
      { name: 'João Lourenço', role: 'member', imageSrc: placeholder },
      { name: 'Lucia Barbosa', role: 'member', imageSrc: placeholder },
      { name: 'Mariana Neves', role: 'member', imageSrc: placeholder }
    ],
  },

  {
    title: 'logistics',
    members: [
      { name: 'Maria Borges', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Lourenço Lopes', role: 'member', imageSrc: placeholder },             
      { name: 'Simão Antunes', role: 'member', imageSrc: placeholder },
     ],
  },

  {
    title: 'production',
    members: [
      { name: 'Mariana Inácio', role: 'dep-leader', imageSrc: fotos.Mariana_Inacio },
      { name: 'César Martinho', role: 'member', imageSrc: placeholder },
      { name: 'Francisco Antunes', role: 'member', imageSrc: placeholder },
      { name: 'Sara Martins', role: 'member', imageSrc: placeholder }
    ],
  },

  {
    title: 'sponsoring',
    members: [
      { name: 'Henrique Cid', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Ana Reis', role: 'member', imageSrc: placeholder },
      { name: 'Barbara Matos', role: 'member', imageSrc: placeholder },
      { name: 'Mariana Meira', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'cost',
    members: [
      { name: 'Maria Beatriz Romão', role: 'dep-leader', imageSrc: placeholder },
    ],
  }
];



TeamListData.fsfenixevo = [
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
      { name: 'Alexandre Rusu', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Peixe', role: 'member', imageSrc: fotos.Diogo_Peixe },
      { name: 'Francisco Rodrigues', role: 'member', imageSrc: placeholder },
      { name: 'José Tavares', role: 'member', imageSrc: placeholder },
      { name: 'Miguel Lourenço', role: 'member', imageSrc: fotos.Miguel_Lourenco },
      { name: 'Tomás Pinto', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'chassis',
    members: [
      { name: 'Martim Matias', role: 'dep-leader', imageSrc: fotos.Martim_Matias },
      { name: 'Carlos Barbosa', role: 'member', imageSrc: fotos.Carlos_Barbosa },
      { name: 'Joaquim Nascimento', role: 'member', imageSrc: placeholder },
      { name: 'Pedro Fidalgo', role: 'member', imageSrc: placeholder },
      { name: 'Rafael Jordão', role: 'member', imageSrc: fotos.Rafael_Jordao },
    ],
  },

  {
    title: 'vehicle-dynamics',
    members: [
      { name: 'Manuel Santos', role: 'dep-leader', imageSrc: fotos.Manuel_Tiago_Santos },
      { name: 'Francisco Almeida', role: 'member', imageSrc: placeholder },
      { name: 'Tiago Alves', role: 'member', imageSrc: placeholder },
      { name: 'Tiago Valadas', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'suspension',
    members: [
      { name: 'João Xisto', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Gonçalo Correia', role: 'member', imageSrc: placeholder },
      { name: 'Guilherme Faria', role: 'member', imageSrc: placeholder },
      { name: 'João Barroso', role: 'member', imageSrc: fotos.Joao_Barroso },
      { name: 'Ricardo Ferreira', role: 'member', imageSrc: placeholder },
      { name: 'Simão Cruz', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'electronics',
    members: [
      { name: 'Bernardo Carmona', role: 'dep-leader', imageSrc: placeholder },
      { name: 'André Dimas', role: 'member', imageSrc: placeholder },
      { name: 'Frederico Henriques', role: 'member', imageSrc: placeholder },
      { name: 'João Garcia', role: 'member', imageSrc: fotos.Joao_Garcia },
      { name: 'Miguel Torres', role: 'member', imageSrc: placeholder },
      { name: 'Rafael Fortes', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'powertrain',
    members: [
      { name: 'David Amaral', role: 'dep-leader', imageSrc: fotos.David_Amaral },
      { name: 'João Cabral', role: 'dep-leader', imageSrc: fotos.Joao_Cabral },
      { name: 'Carolina Patrão', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Casaleiro', role: 'member', imageSrc: placeholder },
      { name: 'Diogo Ferreira', role: 'member', imageSrc: placeholder },
      { name: 'Guilherme Duarte', role: 'member', imageSrc: placeholder },
      { name: 'Lourenço Matias', role: 'member', imageSrc: placeholder },
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
      { name: 'João Lourenço', role: 'member', imageSrc: placeholder },
      { name: 'Lucia Barbosa', role: 'member', imageSrc: placeholder },
      { name: 'Mariana Neves', role: 'member', imageSrc: placeholder }
    ],
  },

  {
    title: 'logistics',
    members: [
      { name: 'Maria Borges', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Lourenço Lopes', role: 'member', imageSrc: placeholder },             
      { name: 'Simão Antunes', role: 'member', imageSrc: placeholder },
     ],
  },

  {
    title: 'production',
    members: [
      { name: 'Mariana Inácio', role: 'dep-leader', imageSrc: fotos.Mariana_Inacio },
      { name: 'César Martinho', role: 'member', imageSrc: placeholder },
      { name: 'Francisco Antunes', role: 'member', imageSrc: placeholder },
      { name: 'Sara Martins', role: 'member', imageSrc: placeholder }
    ],
  },

  {
    title: 'sponsoring',
    members: [
      { name: 'Henrique Cid', role: 'dep-leader', imageSrc: placeholder },
      { name: 'Ana Reis', role: 'member', imageSrc: placeholder },
      { name: 'Barbara Matos', role: 'member', imageSrc: placeholder },
      { name: 'Mariana Meira', role: 'member', imageSrc: placeholder },
    ],
  },

  {
    title: 'cost',
    members: [
      { name: 'Maria Beatriz Romão', role: 'dep-leader', imageSrc: placeholder },
    ],
  }
];
export default TeamListData;