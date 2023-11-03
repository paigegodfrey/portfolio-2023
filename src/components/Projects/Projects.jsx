import projects from '../../projectList';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((p, idx) => (
          <ProjectCard project={p} key={idx} />
        ))}
      </div>
    </div>
  );
}
