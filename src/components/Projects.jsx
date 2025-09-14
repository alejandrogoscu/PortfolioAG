import ProjectCard from './ProjectCard';
import ProjectsData from '../data/projects.json';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '../styles/Projects.css';

const Projects = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  const [gridRef, isGridVisible] = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <>
      <section className="projects__section" id="projects">
        <h1 className={`projects__title ${isTitleVisible ? 'projects__title--visible' : ''}`} ref={titleRef}>
          Proyectos
        </h1>
        <div className={`projects__grid ${isGridVisible ? 'projects__grid--visible' : ''}`} ref={gridRef}>
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
