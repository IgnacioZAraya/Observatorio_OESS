import React from "react";
import "../style.css";

function Header() {
  return (
    <div className="content-wrapper">
      <header className="header-container">
        <div className="header-top">
          /* Logotipo y redes sociales */
          <div className="logo-section">
            <img
              src="Image/MTSS AZUL (1).png"
              alt="Logo del Ministerio"
              className="logo"
            ></img>
            /* Redes Sociales */
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
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
            <div className="search-bar">
              <input type="text" placeholder="Buscar"></input>
              <button>Buscar</button>
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
