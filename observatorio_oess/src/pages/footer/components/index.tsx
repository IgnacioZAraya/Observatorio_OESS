import React from "react";
import BreteLogo from "../../../assets/Image/BRETE.png"
import EssLogo from "../../../assets/Image/Logo Ess.png"
import DessLogo from "../../../assets/Image/DESS BLANCO.png"
import "../style.css";

function Footer() {
  return (
    <div className="content-wrapper">
      <footer className="footer">
          <div className="left">
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
          </div>
          <div className="right">
            <div className="footer-section">
              <h3>Contacto</h3>
              <ul>
                <li>Edificio Presbítero Benjamín Núñez, Barrio Tournón.</li>
                <li>Central Telefónica: (506) 2542-0000</li>
              </ul>
            </div>
          {/* <!-- Logos alineados horizontalmente --> */}
          <div className="footer-logos">
            <img
              src={DessLogo}
              alt="Dess"
              className="footer-logo logo-dess"
            ></img>
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