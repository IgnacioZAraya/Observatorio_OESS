import React from "react";
import "../style.css";

function Footer() {
  return (
    <div className="content-wrapper">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>El MTSS</h3>
            <ul>
              <li>
                <a href="#">Jerarcas</a>
              </li>
              <li>
                <a href="#">Despacho</a>
              </li>
              <li>
                <a href="#">Transparencia</a>
              </li>
              <li>
                <a href="#">Contraloría de Servicios</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Navegación</h3>
            <ul>
              <li>
                <a href="#">Mapa del Sitio</a>
              </li>
              <li>
                <a href="#">Términos de Uso</a>
              </li>
              <li>
                <a href="#">Accesibilidad</a>
              </li>
              <li>
                <a href="#">Lo más reciente</a>
              </li>
              <li>
                <a href="#">Calculadoras</a>
              </li>
              <li>
                <a href="#">Solicitud de criterios jurídicos laborales</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Edificio Presbítero Benjamín Núñez, Barrio Tournón.</p>
            <p>Central Telefónica: (506) 2542-0000</p>
          </div>
          {/* <!-- Logos alineados horizontalmente --> */}
          <div className="footer-logos">
            <img
              src="Image/DESS BLANCO.png"
              alt="Logo MTSS"
              className="footer-logo logo-mtss"
            ></img>
            <div className="logo-row">
              <img
                src="Image/Logo Ess.png"
                alt="Logo ESS"
                className="footer-logo logo-ess"
              ></img>
              <img
                src="Image/BRETE.png"
                alt="Logo BRETE"
                className="footer-logo logo-brete"
              ></img>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2023 Ministerio de Trabajo y Seguridad Social. Costa Rica.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
