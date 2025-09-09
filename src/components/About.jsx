import fotoCV from '../assets/images/fotoCV.webp';
import '../styles/about.css';

const About = () => {
  return (
    <>
      <section className="about__section" id="about">
        <h1 className="about__title">Biografía</h1>

        <div className="about__container">
          <div className="about__grid">
            <div className="about__bio">
              <p className="about__text">
                Profesional con más de 12 años de experiencia en la creación y gestión de proyectos audiovisuales ahora
                especializado en desarrollo Full Stack.
              </p>
            </div>

            <div className="about__image-container">
              <img className="about__image" src={fotoCV} alt="alejandrogoscu mirando a cámara con una gran sonrisa." />
            </div>

            <div className="about__separator"></div>

            <div className="about__skills">
              <p className="about__text">
                Trabajar en estos proyectos me ha enseñado a combinar estética, precisión y cohesión narrativa.
                Habilidades que aplico al diseño y desarrollo web, creando experiencias digitales que integran
                funcionalidad y creatividad.
              </p>

              <p className="about__text">
                Experto en la coordinación de equipos multidisciplinares, gestión de feedback de diversos perfiles y
                optimización de flujos de trabajo. Destaco por mi pensamiento lógico, resolución de problemas y
                habilidad para traducir ideas complejas en soluciones funcionales y atractivas, orientadas siempre al
                usuario final.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
