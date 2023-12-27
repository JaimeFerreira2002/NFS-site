import React from 'react';
import { Link } from 'react-router-dom';
import NFSLogo from '../assets/images/NFSLogo.png'
import './TopBar.css';

function TopBar() {
  return (
    <nav className="top-bar">
      <div className="logo">
        <img src={NFSLogo} alt="NFS" />
      </div>
      <ul>   
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/team">Equipa</Link></li>
        <li><Link to="/partners">Parcerias</Link></li>
        <li><Link to="/articles">Artigos</Link></li>
        <li><Link to="/recruitment">Recrutamento</Link></li>
        <li><Link to="/contacts">Contactos</Link></li>
      </ul>
      <div className="language-dropdown">
        {/* Add your language dropdown component here */}
      </div>
    </nav>
  );
}

export default TopBar;