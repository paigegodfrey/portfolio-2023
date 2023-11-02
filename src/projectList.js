import jobly from "./assets/images/jobly1.png"
import microblog from "./assets/images/microblog1.png";
import jumpOff from "./assets/images/jumpoff1.png";
import flixster from "./assets/images/flixster1.png";

let projects = [
  {
    title: "Jobly",
    technologies: "React • Node • Express • PostgreSQL",
    description: `Jobly is a full stack mock job-search application in which 
                  users can login, view companies/jobs, and apply to open 
                  positions.`,
    techDetail:`The frontend uses React Context to manage global state and the 
                backend features a RESTful API with token-based authentication. 
                Integration tests are written with Jest and SuperTest.`,
    img: jobly,
    link: "http://jobly-build.surge.sh/",
    github: "https://github.com/paigegodfrey/jobly"
  },
  {
    title: "Microblog",
    technologies: "React • Redux • Node • Express • PostgreSQL",
    description: `Microblog is a full stack blogging application that allows users 
                  to create blog posts, add comments, and rank posts by votes.`,
    techDetail:`Redux Thunk is used to execute asynchronous API calls, with blog 
                titles and posts stored in separate data structures to optimize 
                loading.`,
    img: microblog,
    link: "http://microblog.surge.sh/",
    github: "https://github.com/paigegodfrey/microblog"
  },
  {
    title: "JumpOffCampus",
    technologies: "React • Ruby on Rails • PostgreSQL",
    description: `JumpOffCampus enables students to find off-campus housing solutions in 
                  their community.`,
    techDetail:`During my internship, I worked primarily in React to refactor legacy 
                components from classes to hooks and improve the apartment listings UI 
                by separating list and map views and integrating Google Maps API. I also 
                built and tested MVC components for “points of interest” feature, as part 
                of an upgrade from Rails 2 to Rails 5.`,
    img: jumpOff,
  },
  {
    title: "Flixster",
    technologies: "JavaScript • HTML • CSS",
    description: `Flixster is a Vanilla JavaScript movie application in which users 
                  can browse current movies, search titles, and view details, including
                  genre, duration, rating, and description.`,
    techDetail:`Application is styled with pure CSS and features flexbox and grid. Data 
                is sourced from The Movie Database API.`,
    img: flixster,
    link: "https://flixster.netlify.app/",
    github: "https://github.com/paigegodfrey/flixster"
  },
]

export default projects;