import resume from "../../assets/files/Paige_Godfrey_Resume_2023.pdf";
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Paige Godfrey</h1>
        <h2>Not your average software engineer</h2>
        <div>
          <a className="btn-resume" href={resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
