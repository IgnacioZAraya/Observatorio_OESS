import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Foto7 from "../../../assets/Image/Carrousel/acamude.jpg";
import { default as Foto4, default as Foto8 } from "../../../assets/Image/Carrousel/apacoop.jpg";
import Foto3 from "../../../assets/Image/Carrousel/arboles de vida.jpg";
import Foto10 from "../../../assets/Image/Carrousel/asoc agro.jpg";
import Foto9 from "../../../assets/Image/Carrousel/AyA.jpg";
import Foto2 from "../../../assets/Image/Carrousel/cruz roja.jpg";
import Foto6 from "../../../assets/Image/Carrousel/fedeagua.jpg";
import Foto1 from "../../../assets/Image/Carrousel/feria 3.jpg";
import Foto5 from "../../../assets/Image/Carrousel/feria 4.jpg";


import "../style.css";

function replaceBr(s : string){
  return s.replace(/\n/g, "<br />")
}

const items = [
  {
    id:1,
    title:"¿Qué es Economía Social Solidaria?",
    img:"",
    desc:"Según la Asamblea General de las Naciones Unidas, la Economía Social Solidaria engloba a: empresas, organizaciones y otras entidades que realizan actividades tanto económicas como sociales o medioambientales bajo un interés colectivo como general, partiendo desde los principios de: la cooperación voluntaria y la ayuda mutua, la gobernanza democrática o participativa, la autonomía y la independencia, y la primacía de las personas y el fin social sobre el capital en la distribución y el uso de los excedentes o los beneficios, así como de los activos.\n\n"+
    "Además, se caracterizan por poner en práctica un conjunto de valores que son intrínsecos a su funcionamiento y acordes con el cuidado de las personas y el planeta, la igualdad y la equidad, la interdependencia, la auto gobernanza, la transparencia y la rendición de cuentas, y el logro del trabajo decente y de medios de vida dignos."
  },
  {
    id:2,
    title:"Organizaciones de la Economía Social Solidaria en Costa Rica",
    img:"",
    desc:"Las organizaciones reconocidas como integrantes de la Economía Social Solidaria según el Decreto Ejecutivo N° 39835 MP-MTSS:\n\n" +
    "1. Asociaciones Cooperativas. \n" + 
    "2. Asociaciones Solidaristas. \n"+
    "3. Asociaciones de: Productores, Trabajadores, Gremiales, Artistas u Otras que realicen actividades económicas sin fines de lucro. \n" +
    "4. Asociaciones Comunales que realicen actividades económicas empresariales. \n" +
    "5. Centros Agricolas Cantonales. \n" +
    "6. Asociaciones Administradoras de los sistemas de Acueductos y Alcantarillados (ASADAS). \n" +
    "7. Fundaciones que realicen actividades económicas empresariales. \n" +
    "8. Sociedades Anónimas Laborales. \n" +
    "9. Entidades creadas por normas específicas o leyes especiales que realicen actividades empresariales, cuyos principios orientadores y reglas de funcionamiento que las caractericen, respondan a lo estipulado en el Decreto Ejecutivo No. 39835 MP-MTSS."  
  },
  {
    id:3,
    title:"Dirección Nacional de Economía Social Solidaria",
    img:"",
    desc:"La Dirección Nacional de Economía Social Solidaria es una dependencia del Ministerio de Trabajo y Seguridad Social, creada mediante el Decreto Ejecutivo: 41059-MTSS. La Dirección de Economía Social Solidaria (DESS), tiene como objetivo impulsar y articular las distintas políticas públicas para fortalecer el sector privado de la Economía Social Solidaria que existe en Costa Rica, buscando generar trabajo decente, combatiendo a la pobreza y desigualdad.\n\n"+
    "En el marco internacional, la DESS reconoce la resolución de la Asamblea General de las Naciones Unidas: \"Promover la economía social y solidaria para el desarrollo sostenible A/77/L.60\". Esta resolución alienta a los Estados Miembros a implementar: estrategias políticas y programas a nivel nacional, que busquen fomentar la economía social y solidaria como un posible modelo de desarrollo socioeconómico sostenible, al igual que como un instrumento de planificación y programación, en particular el Marco de Cooperación de las Naciones Unidas para el Desarrollo Sostenible."
  },
  {
    id:4,
    title:"Observatorio ESS",
    img:"",
    desc:"El objetivo del Observatorio de Economía Social Solidaria es: dotar al país con instrumentos que permitan gestionar de manera ideal la información de los sectores que integran la Economía Social Solidaria, facilitando su comprensión y la medición del impacto que generan en la economía.\n\n"+
    "Es por lo anterior, que desde la Dirección de Economía Social Solidaria del Ministerio de Trabajo y Seguridad Social (MTSS), con la colaboración de la Comisión Económica para América Latina (CEPAL), hemos convenido en la unificación de esfuerzos para presentar el primer Observatorio de la Economía Social Solidaria de Costa Rica."
  },
];


const Single = ({item}:any) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref
  });

  const x = useTransform(scrollYProgress, [0.25,1], [-190,950])

  return <section ref={ref}>
    <div className="container">
      <div className="wrapper">
        <img src={item.img} />
        <motion.div className="textContainer" style={{ x }}>
          <h2>{item.title}</h2>
          <p dangerouslySetInnerHTML={{__html: replaceBr(item.desc)}}/>
        </motion.div>
      </div>
    </div>
    </section>
};

function FrontPage() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness:100,
    damping:30,
  });

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
            <div className="img-wrapper slower1">
              <img src={Foto6}></img>
            </div>
            <div className="img-wrapper faster">
              <img src={Foto7}></img>
            </div>
            <div className="img-wrapper slower2">
              <img src={Foto8}></img>
            </div>
            <div className="img-wrapper faster1">
              <img src={Foto9}></img>
            </div>
            <div className="img-wrapper slowest">
              <img src={Foto10}></img>
            </div>
          </div>
        </div>
        
        {/* Parallax container, parragraphs */}
        <div className="parallax">
          {items.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default FrontPage;
