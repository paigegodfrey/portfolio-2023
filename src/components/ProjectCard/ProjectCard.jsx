/* eslint-disable react/prop-types */
import './ProjectCard.css';

export default function ProjectCard({ project }) {

  let { title, description, technologies, img, link, github } = project;

  return (
    <div className="project-card">
      <div className="image-container">
        <img className="project-image" src={img}/>
      </div>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{technologies}</p>
      </div>
    </div>
  );
}
