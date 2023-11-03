import { useState } from 'react';
import { BarLoader } from 'react-spinners';
import resume from "../../assets/files/Paige_Godfrey_Resume_2023.pdf";
import profilePic from '../../assets/images/profilePic.jpg';
import "./About.css";

export default function About() {

  const [isLoading, setIsLoading] = useState(true);

  function displayContent() {
    setIsLoading(false);
  }

  const styledText = {
    textDecoration: 'none',
    color: 'tomato'
  };

  return (
    <div className="about">
      <h1>About Me</h1>
      {isLoading ? <BarLoader color={'white'} /> : null}
      <div className={isLoading ? "about-content-hide" : "about-content"}>
        <div className="about-text">
          <p>
            I’ve always been drawn to the power and beauty of technical disciplines.
          </p>
          <p>
            Growing up, I studied Tae Kwon Do, earning my <span style={styledText}>
              Second-Degree Black Belt</span> after 6 years of training.
          </p>
          <p>
            In college, I received my bachelor's degree in Finance and Economics,
            graduating <span style={styledText}>Summa Cum Laude</span> from
            Cal Poly San Luis Obispo.
          </p>
          <p>
            During my <span style={styledText}>6-year finance career,</span> I
            worked as a Financial Analyst,
            Project Manager, and Training Coordinator at Chevron, entering through
            the company's Finance Leadership Development Program.
          </p>
          <p>
            After years of Excel modeling, I decided to take on a new technical craft,
            leveling up from spreadsheets to software.
          </p>
          <p>
            I learned Vanilla Javascript and enrolled at <span style={styledText}>
              Rithm School</span> — a 16-week, full-time software engineering program
            focused on React, Node, Express, Python, PostgreSQL, and data structures.
          </p>
          <p>
            Since graduating Rithm School, I've worked as a <span style={styledText}>
              Technical Lead, Instructor, and Teaching Assistant </span> at CodePath's
            software engineering program and interned at Chronicled, a San Francisco
            blockchain startup.
          </p>
          <p>
            I'm very eager to continue growing as a Software Engineer and am currently
            looking for opportunities in <span style={styledText}>frontend and full
              stack web development.</span>
          </p>
          <div className="btn-container">
            <a className=" btn btn-resume" href={resume} target="_blank"
              rel="noreferrer">
              Resume
            </a>
            <a className="btn btn-email" href="mailto:paagodfrey@gmail.com"
              target="_blank" rel="noreferrer">
              Email
            </a>
            <a className="btn btn-linkedin" href="https://www.linkedin.com/in/paigegodfrey/"
              target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-github" href="https://github.com/paigegodfrey"
              target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div>
          <img className="profile-image" src={profilePic} alt="profile-pic"
            onLoad={displayContent} />
        </div>
      </div>
    </div>
  );
}
