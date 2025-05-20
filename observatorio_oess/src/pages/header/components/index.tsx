import React, { useState } from "react";
import { Link } from "react-scroll";
import logoMTSS from "../../../assets/Image/MTSSDORADO.png";
import logoBMTSS from "../../../assets/Image/MTSSBLANCO.png";
import logoFB from "../../../assets/Image/RedesSoaciales/fb_icon.png";
import logoIG from "../../../assets/Image/RedesSoaciales/Ig_Icon.png";
import logoX from "../../../assets/Image/RedesSoaciales/X_Icon.png";
import logoYT from "../../../assets/Image/RedesSoaciales/Yt_Icon.png";
import logoLK from "../../../assets/Image/RedesSoaciales/Lk_Icon.png";
import logoEM from "../../../assets/Image/RedesSoaciales/Em_Icon.png";
import "../style.css";

function Header() {

  const [showHamMenu, setShowHamMenu] = useState(false);
  
  return (
    <div className="header">
      <div className="wrapper">
        <img src={logoMTSS} alt="Logo del Ministerio" className="logo" />

        <div className="half">
          <ul className="links">
            <li>
              <a href="">
                <span>Inicio</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a href="">
                <span>Contáctenos</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a href="">
                <span>Despacho</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a href="">
                <span>Ingreso Funcionarios</span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li>
              <a href="">
                <span>Denuncia Auditoria</span>
              </a>
            </li>
          </ul>
          <div className="utilities">
            <div className="socials">
              <a href="https://www.facebook.com/TrabajoCR">
                <img src={logoFB} alt="Logo de FB" />
              </a>
              <a href="https://www.instagram.com/ministeriodetrabajocr/">
                <img src={logoIG} alt="Logo de IG" />
              </a>
              <a href="https://twitter.com/MTSS_CR">
                <img src={logoX} alt="Logo de X" />
              </a>
              <a href="https://www.youtube.com/user/TrabajoCostaRica">
                <img src={logoYT} alt="Logo de YT" />
              </a>
              <a href="https://www.linkedin.com/company/ministerio-de-trabajo-y-seguridad-social-cr">
                <img src={logoLK} alt="Logo de LD" />
              </a>
              <a href="#">
                <img src={logoEM} alt="Logo de LD" />
              </a>
            </div>
            <div className="searchbar">
              <form
                name="searcher"
                action="/buscador/Default.aspx"
                method="post"
                role="search"
              >
                <div className="inputGroup">
                  <input
                    type="text"
                    className="form-control"
                    name="expresion"
                    id="expresion"
                    placeholder="Buscar"
                  />
                  <span className="btnWrapper">
                    <button className="btnSearch" type="submit" title="Buscar">
                      Buscar
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        <img
          src={logoBMTSS}
          alt="Logo del Ministerio"
          className="logo-mobile"
        />

        <img
          className="ham-menu"
          src="https://img.icons8.com/?size=100&id=PpSBa7iaIak3&format=png&color=FFFFFF"
          alt="menu--v5" 
          onClick={() => setShowHamMenu(!showHamMenu)}
        />

        <div 
        className="navHamMenu" 
        style={{display : showHamMenu ? "flex" : "none"}}
        >
          <Link
          activeClass="active"
          to="home"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
          >
            El Ministerio
          </Link>
        <Link
          activeClass="active"
          to="about"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Transparencia
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Trámites y Servicios
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Temas Laboales
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Seguridad Social
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Empleo y Formación
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Sala de Prensa
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Perfiles
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Inicio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Contáctenos
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Despacho
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Ingreso Funcionarios
        </Link>
        <Link
          activeClass="active"
          to="contact"
          className="mobileListItem"
          onClick={() => setShowHamMenu(false)}
        >
          Denuncia Auditoria
        </Link>
        </div>
      </div>
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
    </div>
  );
}

export default Header;
