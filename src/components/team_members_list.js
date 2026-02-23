import * as fotos from '../fotos'
const TeamListData = []

  TeamListData.novaev01 = [
  {
    title: 'board',
    members: [
      { name: 'Martim Costa', role: 'team-leader', imageSrc: fotos.Martim_Costa },
      { name: 'Martim Matias', role: 'technical-director', imageSrc: fotos.Martim_Matias }, 
      { name: 'Carmo Cadilha', role: 'project-manager', imageSrc: fotos.Carmo_Cadilha },
      { name: 'Simão Correia', role: 'bsd', imageSrc: fotos.placeholder },
    ],
  },

  /* ///////Techincal//////// */
  {
    title: 'aerodynamics',
    members: [
      { name: 'Mário Fonseca', role: 'dep-leader', imageSrc: fotos.Mario_Fonseca },
      { name: 'Alexandre Rusu', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Diogo Peixe', role: 'member', imageSrc: fotos.Diogo_Peixe },
      { name: 'Francisco Rodrigues', role: 'member', imageSrc: fotos.placeholder },
      { name: 'José Tavares', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Miguel Lourenço', role: 'member', imageSrc: fotos.Miguel_Lourenco },
      { name: 'Tomás Pinto', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  {
    title: 'chassis',
    members: [
      { name: 'Martim Matias', role: 'dep-leader', imageSrc: fotos.Martim_Matias },
      { name: 'Carlos Barbosa', role: 'member', imageSrc: fotos.Carlos_Barbosa },
      { name: 'Joaquim Nascimento', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Pedro Fidalgo', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Rafael Jordão', role: 'member', imageSrc: fotos.Rafael_Jordao },
    ],
  },

  {
    title: 'vehicle-dynamics',
    members: [
      { name: 'Manuel Santos', role: 'dep-leader', imageSrc: fotos.Manuel_Tiago_Santos },
      { name: 'Francisco Almeida', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Tiago Alves', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Tiago Valadas', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  {
    title: 'suspension',
    members: [
      { name: 'João Xisto', role: 'dep-leader', imageSrc: fotos.placeholder },
      { name: 'Gonçalo Correia', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Guilherme Faria', role: 'member', imageSrc: fotos.placeholder },
      { name: 'João Barroso', role: 'member', imageSrc: fotos.Joao_Barroso },
      { name: 'Ricardo Ferreira', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Simão Cruz', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  {
    title: 'electronics',
    members: [
      { name: 'Bernardo Carmona', role: 'dep-leader', imageSrc: fotos.placeholder },
      { name: 'André Dimas', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Frederico Henriques', role: 'member', imageSrc: fotos.placeholder },
      { name: 'João Garcia', role: 'member', imageSrc: fotos.Joao_Garcia },
      { name: 'Miguel Torres', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Rafael Fortes', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  {
    title: 'driverless',
    members: [
      { name: 'Jaime Ferreira', role: 'dep-leader', imageSrc: fotos.Jaime_Ferreira },
      { name: 'Dinis Dashkevych', role: 'member', imageSrc: fotos.placeholder },
      { name: 'João Barata', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Tarik Tuna', role: 'member', imageSrc: fotos.placeholder }
    ],
  },

  {
    title: 'e-powertrain',
    members: [
      { name: 'David Amaral', role: 'dep-leader', imageSrc: fotos.David_Amaral },
      { name: 'Lourenço Matias', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Simão Narciso', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Tomás Martinho', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Wang Nuo', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  {
    title: 'm-powertrain',
    members: [
      { name: 'João Cabral', role: 'dep-leader', imageSrc: fotos.Joao_Cabral },
      { name: 'Carolina Patrão', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Diogo Casaleiro', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Diogo Ferreira', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Guilherme Duarte', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  /* ///////BS//////// */
  {
    title: 'marketing',
    members: [
      { name: 'Rita Mendes', role: 'dep-leader', imageSrc: fotos.Rita_Mendes },
      { name: 'João Lourenço', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Lucia Barbosa', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Mariana Neves', role: 'member', imageSrc: fotos.placeholder }
    ],
  },

  {
    title: 'logistics',
    members: [
      { name: 'Maria Borges', role: 'dep-leader', imageSrc: fotos.placeholder },
      { name: 'Lourenço Lopes', role: 'member', imageSrc: fotos.placeholder },             
      { name: 'Simão Antunes', role: 'member', imageSrc: fotos.placeholder },
     ],
  },

  {
    title: 'production',
    members: [
      { name: 'Mariana Inácio', role: 'dep-leader', imageSrc: fotos.Mariana_Inacio },
      { name: 'César Martinho', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Francisco Antunes', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Sara Martins', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Maria Beatriz Romão', role: 'cost', imageSrc: fotos.placeholder }
    ],
  },

  {
    title: 'sponsoring',
    members: [
      { name: 'Henrique Cid', role: 'dep-leader', imageSrc: fotos.placeholder },
      { name: 'Ana Reis', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Barbara Matos', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Mariana Meira', role: 'member', imageSrc: fotos.placeholder },
    ],
  }
];



TeamListData.fsfenixevo = [
  {
    title: 'board',
    members: [
      { name: 'Martim Costa', role: 'team-leader', imageSrc: fotos.Martim_Costa },
      { name: 'Martim Matias', role: 'technical-director', imageSrc: fotos.Martim_Matias }, 
      { name: 'Carmo Cadilha', role: 'project-manager', imageSrc: fotos.Carmo_Cadilha },
      { name: 'Simão Correia', role: 'bsd', imageSrc: fotos.placeholder },
    ],
  },

  /* ///////Techincal//////// */
  {
    title: 'aerodynamics',
    members: [
      { name: 'Mário Fonseca', role: 'dep-leader', imageSrc: fotos.Mario_Fonseca },
      { name: 'Alexandre Rusu', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Diogo Peixe', role: 'member', imageSrc: fotos.Diogo_Peixe },
      { name: 'Francisco Rodrigues', role: 'member', imageSrc: fotos.placeholder },
      { name: 'José Tavares', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Miguel Lourenço', role: 'member', imageSrc: fotos.Miguel_Lourenco },
      { name: 'Tomás Pinto', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  {
    title: 'chassis',
    members: [
      { name: 'Martim Matias', role: 'dep-leader', imageSrc: fotos.Martim_Matias },
      { name: 'Carlos Barbosa', role: 'member', imageSrc: fotos.Carlos_Barbosa },
      { name: 'Joaquim Nascimento', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Pedro Fidalgo', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Rafael Jordão', role: 'member', imageSrc: fotos.Rafael_Jordao },
    ],
  },

  {
    title: 'vehicle-dynamics',
    members: [
      { name: 'Manuel Santos', role: 'dep-leader', imageSrc: fotos.Manuel_Tiago_Santos },
      { name: 'Francisco Almeida', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Tiago Alves', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Tiago Valadas', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  {
    title: 'suspension',
    members: [
      { name: 'João Xisto', role: 'dep-leader', imageSrc: fotos.placeholder },
      { name: 'Gonçalo Correia', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Guilherme Faria', role: 'member', imageSrc: fotos.placeholder },
      { name: 'João Barroso', role: 'member', imageSrc: fotos.Joao_Barroso },
      { name: 'Ricardo Ferreira', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Simão Cruz', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  {
    title: 'electronics',
    members: [
      { name: 'Bernardo Carmona', role: 'dep-leader', imageSrc: fotos.placeholder },
      { name: 'André Dimas', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Frederico Henriques', role: 'member', imageSrc: fotos.placeholder },
      { name: 'João Garcia', role: 'member', imageSrc: fotos.Joao_Garcia },
      { name: 'Miguel Torres', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Rafael Fortes', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  {
    title: 'powertrain',
    members: [
      { name: 'David Amaral', role: 'dep-leader', imageSrc: fotos.David_Amaral },
      { name: 'João Cabral', role: 'dep-leader', imageSrc: fotos.Joao_Cabral },
      { name: 'Carolina Patrão', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Diogo Casaleiro', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Diogo Ferreira', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Guilherme Duarte', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Lourenço Matias', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Simão Narciso', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Tomás Martinho', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Wang Nuo', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

  /* ///////BS//////// */
  {
    title: 'marketing',
    members: [
      { name: 'Rita Mendes', role: 'dep-leader', imageSrc: fotos.Rita_Mendes },
      { name: 'João Lourenço', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Lucia Barbosa', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Mariana Neves', role: 'member', imageSrc: fotos.placeholder }
    ],
  },

  {
    title: 'logistics',
    members: [
      { name: 'Maria Borges', role: 'dep-leader', imageSrc: fotos.placeholder },
      { name: 'Lourenço Lopes', role: 'member', imageSrc: fotos.placeholder },             
      { name: 'Simão Antunes', role: 'member', imageSrc: fotos.placeholder },
     ],
  },

  {
    title: 'production',
    members: [
      { name: 'Mariana Inácio', role: 'dep-leader', imageSrc: fotos.Mariana_Inacio },
      { name: 'César Martinho', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Francisco Antunes', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Sara Martins', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Maria Beatriz Romão', role: 'cost', imageSrc: fotos.placeholder }
    ],
  },

  {
    title: 'sponsoring',
    members: [
      { name: 'Henrique Cid', role: 'dep-leader', imageSrc: fotos.placeholder },
      { name: 'Ana Reis', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Barbara Matos', role: 'member', imageSrc: fotos.placeholder },
      { name: 'Mariana Meira', role: 'member', imageSrc: fotos.placeholder },
    ],
  },

];
export default TeamListData;