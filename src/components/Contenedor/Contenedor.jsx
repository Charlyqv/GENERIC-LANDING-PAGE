import React from 'react'

import './Contenedor.css';

import { Formulario } from '../Formulario/Formulario';
import { Info } from '../Info/Info';

import fondo from "../../assets/fondo.jpg";
import titulo from "../../assets/titulo.png";
import movil from "../../assets/movil.png";

export const Contenedor = () => {
  return (
    <div className='contenedor'>
      <div className="fondo">
        {/* <div className='titulo'><img src={titulo} alt="Titulo" /></div> */}
        {/* <div className='movil'><img src={movil} alt="Movil" /></div> */}
        {/* <div> <Formulario /> </div> */}
      </div>
      {/* <div> <Info /> </div> */}
    </div>
  )
}
