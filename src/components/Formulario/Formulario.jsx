import React, { useState } from 'react'
import './Formulario.css';


export const Formulario = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    mail: "",
    telefono: "",
    lic: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }
    console.log("Formulario enviado:", formData);
    alert("¡Formulario enviado con éxito!");
  };

  return (
    <div className="col-md-4 col-sm-6 col-12 nested-div">
      <div className="form-container">
      {/* <div> */}
        <h3 className="form-title">
          Compártenos tu información e inicia <br />
          la <strong>experiencia UNLA</strong>
        </h3>
        <form className="form-content custom-form-content" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="nombre">Nombre</label>
            <div className="col-md-12">
              <input
                type="text"
                id="nombre"
                name="nombre"
                maxLength="50"
                pattern="[A-Za-z\s]+"
                autoComplete="off"
                required
                className="custom-input"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="apellidos">Apellidos</label>
            <div className="col-md-12">
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                maxLength="50"
                pattern="[A-Za-z\s]+"
                autoComplete="off"
                required
                className="custom-input"
                value={formData.apellidos}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="mail">Correo electrónico</label>
            <div className="col-md-12">
              <input
                type="email"
                id="mail"
                name="mail"
                autoComplete="off"
                required
                className="custom-input"
                value={formData.mail}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="telefono">Teléfono</label>
            <div className="col-md-12">
              <input
                type="tel"
                id="telefono"
                name="telefono"
                pattern="[0-9]+"
                maxLength="10"
                autoComplete="off"
                required
                className="custom-input"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <label htmlFor="lic">Programa de interés</label>
            <div className="col-md-12">
              <select
                id="lic"
                name="lic"
                required
                className="custom-input"
                value={formData.lic}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Seleccione una opción
                </option>
                <option value="DIPLOMADO EN ESTRATEGIAS Y HABILIDADES DE VENTA">
                  DIPLOMADO EN ESTRATEGIAS Y HABILIDADES DE VENTA
                </option>
                <option value="DIPLOMADO EN PSICOLOGÍA CLÍNICA">
                  DIPLOMADO EN PSICOLOGÍA CLÍNICA
                </option>
                <option value="DIPLOMADO EN DESARROLLO DE NEGOCIOS INNOVADORES">
                  DIPLOMADO EN DESARROLLO DE NEGOCIOS INNOVADORES
                </option>
                <option value="DIPLOMADO EN DISEÑO Y COMPOSICIÓN DE ESPACIOS INTERIORES">
                  DIPLOMADO EN DISEÑO Y COMPOSICIÓN DE ESPACIOS INTERIORES
                </option>
                <option value="DIPLOMADO EN DESARROLLO DE PRODUCTOS ALIMENTICIOS">
                  DIPLOMADO EN DESARROLLO DE PRODUCTOS ALIMENTICIOS
                </option>
                <option value="CURSO DOMINIO DEL DISCURSO: ORATORIA, POLÍTICA Y NEGOCIACIÓN">
                  CURSO DOMINIO DEL DISCURSO: ORATORIA, POLÍTICA Y NEGOCIACIÓN
                </option>
                <option value="CURSO DISEÑO DE ESPACIOS COMERCIALES">
                  CURSO DISEÑO DE ESPACIOS COMERCIALES
                </option>
                <option value="CURSO ADMINISTRACIÓN DE NÓMINA Y BENEFICIOS LABORALES">
                  CURSO ADMINISTRACIÓN DE NÓMINA Y BENEFICIOS LABORALES
                </option>
                <option value="CURSO EN INTELIGENCIA ARTIFICIAL GENERATIVA">
                  CURSO EN INTELIGENCIA ARTIFICIAL GENERATIVA
                </option>
                <option value="ECARD GENERAL">ECARD GENERAL</option>
              </select>
            </div>
          </div>
          <div className="row" style={{ marginTop: "15px", marginBottom: "15px"}}>
            <div className="col-xs-2 col-md-1 d-flex align-items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                checked={formData.terms}
                onChange={handleChange}
                className="checkbox-custom"
              />

              <label className="terminos terminos-custom" style={{ textAlign: "justify" }} htmlFor="terms" id="termycondiciones">
                He leído y acepto los términos y condiciones del{" "}
                <strong>
                  <a
                    style={{ color: "blue", textDecoration: "underline" }}
                    href="https://www.unla.mx/aviso-de-privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aviso de privacidad
                  </a>
                </strong>
                ; además estoy de acuerdo con recibir información.
              </label>
            </div>
          </div>
          <hr />
          <div className="row">
            <div
              className="col-md-12"
              style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
            >
              <div className="button-container">
                <button className="btn btn-sent" type="submit" id="submitButton">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};