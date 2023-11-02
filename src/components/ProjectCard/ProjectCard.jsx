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
        <p style={{fontWeight: '600'}}>{technologies}</p>
        <div>
          {link &&
            <a className="btn" href={link} target="_blank" rel="noreferrer" style={{ marginRight: "5px" }}>
              Demo
            </a>}
          {github &&
            <a className="btn" href={github} target="_blank" rel="noreferrer">
              Github
            </a>}
        </div>
      </div>
    </div >
  );
}
