import ProjectCard from './ProjectCard';
import ProjectsData from '../data/projects.json';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <>
      <section className="projects__section" id="projects">
        <h1 className="projects__title">Projectos</h1>
        <div className="projects__grid">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
