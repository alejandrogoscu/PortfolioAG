import { useState, useEffect } from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    if (project.videoSrc) {
      const loadVideo = async () => {
        try {
          const videoModule = await import(`../assets/videos/${project.videoSrc}`);
          setVideoSrc(videoModule.default);
        } catch (error) {
          console.error(`Error loading video: ${project.videoSrc}`, error);
        }
      };
      loadVideo();
    }
  }, [project.videoSrc]);

  return (
    <>
      <div className="projectCard__container">
        <div className="projectCard__media">
          {videoSrc && (
            <video className="projectCard__video" muted loop autoPlay preload="metadata">
              <source src={videoSrc} type="video/webm" />
              This browser doesn't support WebM playback
            </video>
          )}
        </div>

        <h2 className="projectCard__title">{project.title}</h2>
        <p className="projectCard__description">{project.description}</p>

        <div className="projectCard__technologies">
          {project.technologies.map((tech, index) => (
            <div className="projectCard__tech" key={index}>
              <i className={tech.icon}></i>
            </div>
          ))}
        </div>

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
            Ver Proyecto
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
