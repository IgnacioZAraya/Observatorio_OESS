import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ReportComp from "../../reporte/components";
import Foto7 from "../../../assets/Image/Carrousel/QUESOS.jpg";
import Foto4 from "../../../assets/Image/Carrousel/RABANOS.jpg";
import Foto8 from "../../../assets/Image/Carrousel/agua.jpg";
import Foto3 from "../../../assets/Image/Carrousel/CONCHAS.jpg";
import Foto10 from "../../../assets/Image/Carrousel/Copia de 1747067119483.jpg";
import Foto9 from "../../../assets/Image/Carrousel/Copia de 20241120_111106.jpg";
import Foto2 from "../../../assets/Image/Carrousel/Copia de 20241120_111727.jpg";
import Foto6 from "../../../assets/Image/Carrousel/Copia de 4 7.jpg";
import Foto1 from "../../../assets/Image/Carrousel/II Feria.jpg";
import Foto5 from "../../../assets/Image/Carrousel/IMG-20231109-WA0075.jpg";
import Foto11 from "../../../assets/Image/Carrousel/IMG_0349.png";
import Foto12 from "../../../assets/Image/Carrousel/Producto arete.png";
import Foto13 from "../../../assets/Image/Carrousel/Copia de 1747067119565.jpg";
import Foto14 from "../../../assets/Image/Carrousel/Copia de 1747067119639.jpg";
import Foto15 from "../../../assets/Image/Carrousel/unnamed.jpg";
import Foto16 from "../../../assets/Image/Carrousel/mascaras.jpg";
import Icon1 from "../../../assets/Image/PropIcons/solidarity.png";
import Icon2 from "../../../assets/Image/PropIcons/corporate.png";
import Icon3 from "../../../assets/Image/PropIcons/united-nations.png";
import Icon4 from "../../../assets/Image/PropIcons/goal.png";
import Cepal from "../../../assets/Image/CEPAL Pantone 279.jpg";
import Brete from "../../../assets/Image/BRETE.png";
import Ess from "../../../assets/Image/Logo Ess.png";

import "../style.css";

function replaceBr(s: string) {
  return s.replace(/\n/g, "<br />");
}

const items = [
  {
    id: 1,
    title: "\n¿Qué es Economía Social Solidaria?",
    img: Icon1,
    desc:
      "\nSegún la Asamblea General de las Naciones Unidas, la Economía Social Solidaria engloba a: empresas, organizaciones y otras entidades que realizan actividades tanto económicas como sociales o medioambientales bajo un interés colectivo como general, partiendo desde los principios de: la cooperación voluntaria y la ayuda mutua, la gobernanza democrática o participativa, la autonomía y la independencia, y la primacía de las personas y el fin social sobre el capital en la distribución y el uso de los excedentes o los beneficios, así como de los activos.\n\n" +
      "Además, se caracterizan por poner en práctica un conjunto de valores que son intrínsecos a su funcionamiento y acordes con el cuidado de las personas y el planeta, la igualdad y la equidad, la interdependencia, la auto gobernanza, la transparencia y la rendición de cuentas, y el logro del trabajo decente y de medios de vida dignos.",
  },
  {
    id: 2,
    title: "\nOrganizaciones de la Economía Social Solidaria en Costa Rica",
    img: Icon2,
    desc:
      "\nLas organizaciones reconocidas como integrantes de la Economía Social Solidaria según el Decreto Ejecutivo N° 39835 MP-MTSS:\n\n" +
      "1. Asociaciones Cooperativas. \n" +
      "2. Asociaciones Solidaristas. \n" +
      "3. Asociaciones de: Productores, Trabajadores, Gremiales, Artistas u Otras que realicen actividades económicas sin fines de lucro. \n" +
      "4. Asociaciones Comunales que realicen actividades económicas empresariales. \n" +
      "5. Centros Agricolas Cantonales. \n" +
      "6. Asociaciones Administradoras de los sistemas de Acueductos y Alcantarillados (ASADAS). \n" +
      "7. Fundaciones que realicen actividades económicas empresariales. \n" +
      "8. Sociedades Anónimas Laborales. \n" +
      "9. Entidades creadas por normas específicas o leyes especiales que realicen actividades empresariales, cuyos principios orientadores y reglas de funcionamiento que las caractericen, respondan a lo estipulado en el Decreto Ejecutivo No. 39835 MP-MTSS.",
  },
  {
    id: 3,
    title: "\nDirección Nacional de Economía Social Solidaria",
    img: Icon3,
    desc:
      "\nLa Dirección Nacional de Economía Social Solidaria es una dependencia del Ministerio de Trabajo y Seguridad Social, creada mediante el Decreto Ejecutivo: 41059-MTSS. La Dirección de Economía Social Solidaria (DESS), tiene como objetivo impulsar y articular las distintas políticas públicas para fortalecer el sector privado de la Economía Social Solidaria que existe en Costa Rica, buscando generar trabajo decente, combatiendo a la pobreza y desigualdad.\n\n" +
      'En el marco internacional, la DESS reconoce la resolución de la Asamblea General de las Naciones Unidas: "Promover la economía social y solidaria para el desarrollo sostenible A/77/L.60". Esta resolución alienta a los Estados Miembros a implementar: estrategias políticas y programas a nivel nacional, que busquen fomentar la economía social y solidaria como un posible modelo de desarrollo socioeconómico sostenible, al igual que como un instrumento de planificación y programación, en particular el Marco de Cooperación de las Naciones Unidas para el Desarrollo Sostenible.',
  },
  {
    id: 4,
    title: "\nObservatorio ESS",
    img: Icon4,
    desc:
      "\nEl objetivo del Observatorio de Economía Social Solidaria es: dotar al país con instrumentos que permitan gestionar de manera ideal la información de los sectores que integran la Economía Social Solidaria, facilitando su comprensión y la medición del impacto que generan en la economía.\n\n" +
      "Es por lo anterior, que desde la Dirección de Economía Social Solidaria del Ministerio de Trabajo y Seguridad Social (MTSS), con la colaboración de la Comisión Económica para América Latina (CEPAL), hemos convenido en la unificación de esfuerzos para presentar el primer Observatorio de la Economía Social Solidaria de Costa Rica.",
  },
];

const Single = ({ item }: any) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0.7, 1], [2, 950]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="propIcon">
            <img src={item.img} alt="prop" />
          </div>
          <motion.div className="textContainer" style={{ x }}>
            <h2 dangerouslySetInnerHTML={{ __html: replaceBr(item.title) }} />
            <p dangerouslySetInnerHTML={{ __html: replaceBr(item.desc) }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function FrontPage() {
  const [showBiComponent, setShowBiComponent] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const handleOnClick = () => {
    setShowBiComponent(!showBiComponent);
  };
  return (
    <div className="content-wrapper">
      <main className="main-content">
        <h1>Observatorio de Economía Social Solidaria</h1>
        <div className="external">
          <div className="horizontal-scroll-wrapper">
            <div className="img-wrapper slower">
              <img src={Foto1}></img>
            </div>
            <div className="img-wrapper faster">
              <img src={Foto2}></img>
            </div>
            <div className="img-wrapper vertical">
              <img src={Foto3}></img>
            </div>
            <div className="img-wrapper slower">
              <img src={Foto4}></img>
            </div>
            <div className="img-wrapper faster">
              <img src={Foto5}></img>
            </div>
            <div className="img-wrapper slower">
              <img src={Foto6}></img>
            </div>
            <div className="img-wrapper fast">
              <img src={Foto7}></img>
            </div>
            <div className="img-wrapper slower">
              <img src={Foto8}></img>
            </div>
            <div className="img-wrapper faster">
              <img src={Foto9}></img>
            </div>
            <div className="img-wrapper vertical">
              <img src={Foto10}></img>
            </div>
            <div className="img-wrapper slower">
              <img src={Foto11}></img>
            </div>
            <div className="img-wrapper faster">
              <img src={Foto12}></img>
            </div>
            <div className="img-wrapper slower">
              <img src={Foto13}></img>
            </div>
            <div className="img-wrapper slower-down">
              <img src={Foto14}></img>
            </div>
            <div className="img-wrapper slow">
              <img src={Foto15}></img>
            </div>
            <div className="img-wrapper fast">
              <img src={Foto16}></img>
            </div>
          </div>
        </div>

        {/* Parallax container, parragraphs */}
        <div className="parallax">
          {items.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </div>
        <div className="containerEstadisticas">
          <div className="infoWrapper">
            <h2>Cantidad de OESS activas y vigentes al 2024</h2>
            <p>27.453</p>
          </div>
          <div className="infoWrapper">
            <h2>Total de miembros en OESS activos y vigentes al 2024</h2>
            <p>1.606.158</p>
          </div>
          <div className="infoWrapper">
            <h2>
              Porcentaje total de la población asociada a una OESS al 2024
            </h2>
            <p>30%</p>
          </div>
        </div>
        <div className="button-section">
          <button className="btn" onClick={handleOnClick}>
            <span style={{ display: !showBiComponent ? "flex" : "none" }}>
              Mostrar Observatorio
            </span>
            <span style={{ display: showBiComponent ? "flex" : "none" }}>
              Colapsar Observatorio
            </span>
          </button>
        </div>

        {showBiComponent && <ReportComp />}

        <div className="logos">
          <img src={Ess} className="logo-ess"></img>
          <img src={Brete} className="logo-brete"></img>
          <div className="collabs">
            <h3>Con colaboración:</h3>
            <img src={Cepal} className="logo-cepal"></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FrontPage;
