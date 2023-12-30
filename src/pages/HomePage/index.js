import React from "react";
import "./index.css";
import NFSLogo from "../../assets/images/NFSLogo.png";
import NOVALogo from "../../assets/images/NOVA_logo.png";
import TeamLeaderPhoto from "../../assets/images/teamLeaderCutileiro.jpg";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Add your background image and text overlay here */}
      <div className="sobre">
        <div className="description">
          <div>
            <br></br>
          </div>
          <div className="text">
            <h1>QUEM SOMOS</h1>

            <h4 className="subtitle">
              Somos a equipa de Formula Student da Universidade Nova de Lisboa.
            </h4>
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
          <h3 className="titleLink"><Link style={{ textDecoration: 'none', color:'black' }} to="/team">Team</Link></h3>
          <span>
            Estudantes apaixonados por engenharia automóvel da NOVA. O nosso
            foco é competir na Formula Student, construindo um carro inovador.
            Procuramos aprender, competir e demonstrar habilidades técnicas em
            eventos.
          </span>
        </div>
        <img
          className="teamLeaderPhoto"
          src={TeamLeaderPhoto}
          alt="Ricardo Cutileiro - Team Leader"
        />
        <br></br>
        <strong>Ricardo Cutileiro</strong>
        <br></br>
        <label>Team Leader</label>
      </div>
    </div>
  );
};

export default HomePage;
