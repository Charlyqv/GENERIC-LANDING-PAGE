import React from 'react'
import './Footer.css';
import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import linkedin from "../../assets/footer/linkedin.png";
import threads from "../../assets/footer/threads.png";
import tiktok from "../../assets/footer/tiktok.png";
import x from "../../assets/footer/x.png";
import youtube from "../../assets/footer/youtube.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-item">
        <a href="https://www.unla.mx/aviso-de-privacidad">Aviso de privacidad </a>
        <br/>
        <a href="https://www.unla.mx/directorio"> Directorio </a>
        <br/>
        <a>Felicitaciones, sugerencias y quejas</a>
        <br/>
      </div>

      <div className="footer-item">
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Manantial de Cointzio #355 <br/>
        Col. Los Manantiales de Morelia C.P. 58188 <br/>
        Morelia, Michoacán, México
      </div>

      <div className="footer-item">
      <FontAwesomeIcon icon={faPhone} /> 
        <a href="tel:4433221500,3"> 443 322 15 00 Ext. 3</a>
        <br/>
            800 700 UNLA<br/>
            ©2024 Derechos Reservados<br/>
      </div>

      <div className="footer-item">
        <a href="https://twitter.com/ComunidadUNLA" target="_blank">
            <img src={x} alt="X" />
        </a>
        <a href="http://www.facebook.com/unlamorelia" target="_blank">
            <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.tiktok.com/@unlamorelia" target="_blank">
            <img src={tiktok} alt="Tiktok" />
        </a>
        <a href="https://www.youtube.com/channel/UCtOnO5hJPg0rmZ6liLoUkFw" target="_blank">  
            <img src={youtube} alt="Youtube" />
        </a>
        <a href="http://instagram.com/unlamorelia" target="_blank">
            <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://mx.linkedin.com/company/universidad-latina-de-am%C3%A9rica?trk=public_profile_experience-item_profile-section-card_image-click" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.threads.net/@unlamorelia" target="_blank">
            <img src={threads} alt="Threads" />
        </a>
      </div>
    </footer>
  )
}
