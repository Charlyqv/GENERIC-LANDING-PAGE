import React from 'react'
import './Info.css';

export const Info = () => {
  return (
    <div className="containerInfo">
      <div>
        <label
          style={{
            color: "white",
            fontFamily: "Calibri, sans-serif",
            fontSize: "35px",
            fontWeight: "lighter",
          }}
        >
          <strong>
            ¡Aprovecha los descuentos exclusivos para la{" "}
            <span
              style={{
                color: "yellow",
                textDecoration: "none",
              }}
            >
              Comunidad UNLA
            </span>
            !
          </strong>
        </label>
      </div>
      <div>
        <label
          style={{
            color: "white",
            fontFamily: "Calibri, sans-serif",
            fontSize: "17px",
            fontWeight: "lighter",
          }}
        >
          +{" "}
          <span
            style={{
              color: "yellow",
              textDecoration: "none",
            }}
          >
            20%
          </span>{" "}
          de descuento para estudiantes UNLA y XUNLA
          <br />
          +{" "}
          <span
            style={{
              color: "yellow",
              textDecoration: "none",
            }}
          >
            15%
          </span>{" "}
          de descuento para personas que anteriormente han tomado un diplomado
          en la UNLA
          <br />
          +{" "}
          <span
            style={{
              color: "yellow",
              textDecoration: "none",
            }}
          >
            10%
          </span>{" "}
          de descuento para padres y madres de estudiantes de UNLA Y XUNLAS
          <br />
          +{" "}
          <span
            style={{
              color: "yellow",
              textDecoration: "none",
            }}
          >
            10%
          </span>{" "}
          de descuento, aplicado para dos personas al momento de inscribirse
          juntas
        </label>
      </div>
    </div>
  );
};