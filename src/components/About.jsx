import fotoCV from '../assets/images/fotoCV.webp';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../styles/About.css';

const About = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  const [bioRef, isBioVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  const [imageRef, isImageVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  const [skillsRef, isSkillsVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  const [cvRef, isCvVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <>
      <section className="about__section" id="about">
        <h1 className={`about__title ${isTitleVisible ? 'about__title--visible' : ''}`} ref={titleRef}>
          Biografía
        </h1>

        <div className="about__container">
          <div className="about__grid">
            <div className={`about__bio ${isBioVisible ? 'about__bio--visible' : ''}`} ref={bioRef}>
              <p className="about__text">
                ¡Hola! Soy <strong>Alejandro Goscu</strong>, profesional con más de 12 años de experiencia en la
                creación y gestión de proyectos audiovisuales ahora especializado en{' '}
                <strong>desarrollo Full Stack</strong>.
              </p>
            </div>

            <div
              className={`about__image-container ${isImageVisible ? 'about__image-container--visible' : ''}`}
              ref={imageRef}
            >
              <img className="about__image" src={fotoCV} alt="alejandrogoscu mirando a cámara con una gran sonrisa." />
            </div>

            <div className="about__separator"></div>

            <div className={`about__skills ${isSkillsVisible ? 'about__skills--visible' : ''}`} ref={skillsRef}>
              <p className="about__text">
                Trabajar en proyectos audiovisuales me ha enseñado a{' '}
                <strong>combinar estética, precisión y cohesión narrativa</strong>. Habilidades que aplico al diseño y
                desarrollo web, creando <strong>experiencias digitales que integran funcionalidad y creatividad</strong>
                .
              </p>

              <p className="about__text">
                Experto en la{' '}
                <strong>
                  coordinación de equipos multidisciplinares, gestión de feedback de diversos perfiles y optimización de
                  flujos de trabajo
                </strong>
                . Destaco por mi{' '}
                <strong>
                  pensamiento lógico, resolución de problemas y habilidad para traducir ideas complejas en soluciones
                  funcionales y atractivas
                </strong>
                , orientadas siempre al usuario final.
              </p>
            </div>

            <div className={`about__cv-download ${isCvVisible ? 'about__cv-download--visible' : ''}`} ref={cvRef}>
              <a className="about__download-button" href="/AlejandroGoscuCV.pdf" download="AlejandroGoscuCV.pdf">
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
