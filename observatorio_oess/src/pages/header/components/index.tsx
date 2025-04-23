import React from "react";
import logoMTSS from "../../../assets/Image/MTSSDORADO.png";
import logoFB from "../../../assets/Image/RedesSoaciales/fb_icon.png";
import logoIG from "../../../assets/Image/RedesSoaciales/Ig_Icon.png";
import logoX from "../../../assets/Image/RedesSoaciales/X_Icon.png";
import logoYT from "../../../assets/Image/RedesSoaciales/Yt_Icon.png";
import logoLK from "../../../assets/Image/RedesSoaciales/Lk_Icon.png";
import logoEM from "../../../assets/Image/RedesSoaciales/Em_Icon.png";
import "../style.css";

function Header() {
  return (
    <div className="content-wrapper">
      <header className="header-container">
        <div className="header-top">
          {/* /* Logotipo y redes sociales */}
          <div className="logo-section">
            <img src={logoMTSS} alt="Logo del Ministerio" className="logo" />
            {/* /* Redes Sociales */}
          </div>
          {/* <!-- Navegación superior y barra de búsqueda --> */}
          <div className="nav-top">
            {/* <!-- Menú superior --> */}
            <div className="menu">
              <a href="#">Inicio</a>
              <a href="#">Contáctenos</a>
              <a href="#">Despacho</a>
              <a href="#">Ingreso Funcionarios</a>
              <a href="#">Denuncia Auditoría</a>
            </div>
            {/* <!-- Barra de búsqueda --> */}
            <div className="row">
              <div className="social-icons">
                <img
                  src={logoFB}
                  alt="Logo del Ministerio"
                  className="fab fa-facebook"
                />
                <img
                  src={logoIG}
                  alt="Logo del Ministerio"
                  className="fab fa-instagram"
                />
                <img
                  src={logoX}
                  alt="Logo del Ministerio"
                  className="fab fa-twitter"
                />
                <img
                  src={logoYT}
                  alt="Logo del Ministerio"
                  className="fab fa-youtube"
                />
                <img
                  src={logoLK}
                  alt="Logo del Ministerio"
                  className="fab fa-linkedin"
                />
                <img
                  src={logoEM}
                  alt="Logo del Ministerio"
                  className="fas fa-envelope"
                />
              </div>
              <div className="search-bar">
                <input type="text" placeholder="Buscar"></input>
                <button>Buscar</button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Barra de Navegación Inferior --> */}
        <nav className="main-navigation">
          <a href="#">El Ministerio</a>
          <a href="#">Transparencia</a>
          <a href="#">Trámites y Servicios</a>
          <a href="#">Temas Laborales</a>
          <a href="#">Seguridad Social</a>
          <a href="#">Empleo y Formación</a>
          <a href="#">Sala de Prensa</a>
          <a href="#">Perfiles</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
