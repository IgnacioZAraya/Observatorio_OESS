import React from "react";
import "../style.css";

function FrontPage() {
  return (
    <div className="content-wrapper">
      <main className="main-content">
        <h2>¿Qué es Economía Social Solidaria?</h2>

        <p>
          {" "}
          Según la Asamblea General de las Naciones Unidas la Economía Social
          Solidaria engloba a empresas, organizaciones y otras entidades que
          realizan actividades económicas, sociales y medioambientales de
          interés colectivo o general, que se basan en los principios de la
          cooperación voluntaria y la ayuda mutua, la gobernanza democrática o
          participativa, la autonomía y la independencia, y la primacía de las
          personas y el fin social sobre el capital en la distribución y el uso
          de los excedentes o los beneficios, así como de los activos. Además,
          se caracterizan por poner en práctica un conjunto de valores que son
          intrínsecos a su funcionamiento y acordes con el cuidado de las
          personas y el planeta, la igualdad y la equidad, la interdependencia,
          la auto gobernanza, la transparencia y la rendición de cuentas, y el
          logro del trabajo decente y de medios de vida dignos.
        </p>

        <h2>Organizaciones de la Economía Social Solidaria en Costa Rica</h2>
        <p>
          Las organizaciones reconocidas como integrantes de la Economía Social
          Solidaria según el Decreto Ejecutivo N° 39835 MP-MTSS:
          <ol>
            <li>Asociaciones cooperativas</li>
            <li>Asociaciones solidaristas</li>
            <li>
              Asociaciones de productores, de trabajadores, gremiales, artistas
              u otras que realicen actividad económica empresarial sin fines de
              lucro.
            </li>
            <li>
              Asociaciones comunales que realicen actividad económica
              empresarial.
            </li>
            <li>Centros Agrícolas Cantonales.</li>
            <li>
              Asociaciones administradoras de los sistemas de acueductos y
              alcantarillados (ASADAS).
            </li>
            <li>Fundaciones que realicen actividad económica empresarial.</li>
            <li>Sociedades anónimas laborales.</li>
            <li>
              Entidades creadas por normas específicas o leyes especiales que
              realicen actividad económica empresarial, cuyos principios
              orientadores y reglas de funcionamiento que las caractericen
              respondan a lo estipulado en el Decreto Ejecutivo N°39835 MP-MTSS.
            </li>
          </ol>
        </p>

        <h2>Dirección Nacional de Economía Social Solidaria</h2>
        <p>
          La Dirección Nacional de Economía Social Solidaria es una dependencia
          del Ministerio de Trabajo y Seguridad Social creada mediante Decreto
          Ejecutivo: 41059-MTSS. La Dirección de Economía Social Solidaria
          (DESS) tiene como objetivo impulsar y articular las distintas
          políticas públicas para fortalecer el sector privado de la Economía
          Social Solidaria que existe en Costa Rica para la generación de
          trabajo decente, combatir la pobreza y la desigualdad. En el marco
          internacional la DESS reconoce la de resolución de la Asamblea General
          de las Naciones Unidas: "Promover la economía social y solidaria para
          el desarrollo sostenible A/77/L.60". Esta resolución alienta a los
          Estados Miembros a que promuevan y apliquen estrategias, políticas y
          programas nacionales, locales y regionales para apoyar y potenciar la
          economía social y solidaria como posible modelo de desarrollo
          económico y social sostenible y como instrumentos de planificación y
          programación, en particular el Marco de Cooperación de las Naciones
          Unidas para el Desarrollo Sostenible.
        </p>

        <h2>Observatorio ESS</h2>
        <p>
          El objetivo del Observatorio de Economía Social Solidaria es dotar al
          país con instrumentos que permitan gestionar de manera ideal la
          información de los sectores que integran la Economía Social Solidaria
          y así comprenderles y medir el impacto que generan en la economía. Es
          por lo anterior, que desde la Dirección de Economía Social Solidaria
          del Ministerio de Trabajo y Seguridad Social (MTSS) con la
          colaboración de la Comisión Económica para América Latina (CEPAL),
          hemos convenido en la unificación de esfuerzos para presentar el
          primer Observatorio de la Economía Social Solidaria de Costa Rica.
        </p>

        <div className="observatorio-btn">
          <a
            href="ObservatorioReportePB.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estadísticas
          </a>
        </div>
        {/* <!-- LOGO CEPAL --> */}
        <div className="logo-container">
          <div className="logo-description">Con apoyo de:</div>
          <div className="logo-wrapper">
            <img
              src="Image/CEPAL Pantone 279.jpg"
              alt="Logo CEPAL"
              className="footer-logo logo-cepal"
            ></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FrontPage;
