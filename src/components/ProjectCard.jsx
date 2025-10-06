import { useState, useEffect, useRef } from 'react';
import LogoLoop from './LogoLoop';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isHovering, setIsHovereing] = useState(false);
  const [hoveredTechs, setHoveredTechs] = useState({});
  const videoRef = useRef(null);

  const videoSrc = project.videoSrc ? `/videos/${project.videoSrc}` : null;
  const imageSrc = project.imageSrc ? `/images/${project.imageSrc}` : null;

  useEffect(() => {
    if (videoRef.current) {
      if (isHovering) {
        videoRef.current.play().catch((err) => console.error('Video error:', err));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovereing(true);
  };

  const handleMouseLeave = () => {
    setIsHovereing(false);
  };

  const handleTechMouseEnter = (index) => {
    setHoveredTechs((prevs) => ({ ...prevs, [index]: true }));
  };

  const handleTechMouseLeave = (index) => {
    setHoveredTechs((prevs) => ({ ...prevs, [index]: false }));
  };

  const getIconClass = (icon, index) => {
    if (hoveredTechs[index]) {
      if (icon.includes('plain-wordmark')) {
        return icon.replace('plain-wordmark', 'plain-wordmark colored');
      } else if (icon.includes('original-wordmark')) {
        return icon.replace('original-wordmark', 'original-wordmark colored');
      } else if (icon.includes('plain')) {
        return icon.replace('plain', 'plain colored');
      }
    }
    return icon;
  };

  const logoItems = project.technologies.map((tech, index) => ({
    node: (
      <i
        className={getIconClass(tech.icon, index)}
        onMouseEnter={() => handleTechMouseEnter(index)}
        onMouseLeave={() => handleTechMouseLeave(index)}
        aria-label={tech.name}
        title={tech.name}
      />
    ),
    ariaLabel: tech.name,
  }));

  return (
    <>
      <div className="projectCard__container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="projectCard__media">
          {imageSrc && !isHovering && <img className="projectCard__image" src={imageSrc} alt={project.title} />}

          {videoSrc && (
            <video
              className={`projectCard__video ${isHovering ? 'visible' : 'hidden'}`}
              ref={videoRef}
              muted
              loop
              preload="metadata"
            >
              <source src={videoSrc} type="video/webm" />
              This browser doesn't support WebM playback
            </video>
          )}
        </div>

        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="projectCard__title-link">
          <h2 className="projectCard__title">{project.title}</h2>
        </a>

        <p className="projectCard__description">{project.description}</p>

        <LogoLoop
          logos={logoItems}
          logoHeight={32}
          gap={24}
          speed={40}
          fadeOut
          fadeOutColor="var(--blancolow)"
          pauseOnHover={true}
          scaleOnHover={true}
          ariaLabel="Tecnologías usadas"
          className="projectCard__logoLoop"
        />

        <div className="projectCard__links">
          <a
            className="projectCard__link projectCard__github"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="projectCard__link projectCard__live" href={project.liveUrl} target="_blank" rel="noreferrer">
            Visitar
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
