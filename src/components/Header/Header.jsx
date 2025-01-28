import React, { useState } from 'react'
import './Header.css';
import { Link } from "react-scroll";
import logo from "../../assets/LogoUNLA.png";

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    // className="header">
    <header className={`header ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar" onClick={toggleMenu}>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>  

      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="https://www.unla.mx/experiencia-unla" target="_blank" rel="noopener noreferrer">
                EXPERIENCIA UNLA
            </a>
          </li>
          <li>
            <a href="https://www.unla.mx/oferta-educativa" target="_blank" rel="noopener noreferrer">
              OFERTA EDUCATIVA
            </a>
          </li>
          <li>
            <a href="https://www.unla.mx/admisiones" target="_blank" rel="noopener noreferrer">
              ADMISIONES
            </a>
          </li>
          <li>
            <a href="https://www.unla.mx/comunidad" target="_blank" rel="noopener noreferrer">
              COMUNIDAD
            </a>
          </li>
          <li>
            <a href="https://www.unla.mx/nosotros" target="_blank" rel="noopener noreferrer">
              NOSOTROS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
