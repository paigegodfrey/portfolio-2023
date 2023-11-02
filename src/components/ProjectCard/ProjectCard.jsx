/* eslint-disable react/prop-types */
import './ProjectCard.css';

export default function ProjectCard({ project }) {

  let { title, description, technologies, image, link, github } = project;

  return (
    <div className="project-card">
      <div className="project-card-header">
        <img className="project-card-image" src={image} alt={image.split('.')[0] + ' image'} />
      </div>
      <div className="project-card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{technologies}</p>
        <div>
          {link &&
            <a href={link} target="_blank" rel="noreferrer" style={{marginRight: "5px"}}>
              <button>Demo</button>
            </a>}
          {github &&
            <a href={github} target="_blank" rel="noreferrer">
              <button>Github</button>
            </a>}
        </div>
      </div>
    </div >
  );
}
