import jobly from "./assets/images/jobly1.png"
import microblog from "./assets/images/microblog1.png";
import squares from "./assets/images/squares.png";
import kinfolx from "./assets/images/kinfolx.png";
import shadowUI from "./assets/images/shadowUI.png";
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
    image: jobly,
    link: "http://jobly-build.surge.sh/",
    github: "https://github.com/paigegodfrey/jobly"
  },
  {
    title: "Kinfolx",
    technologies: "React • JavaScript • CSS",
    description: `Kinfolx is an Oakland-based coffee shop. Worked on a team
                  of 4 to build improved React UI. Developed landing page and
                  optimized performance via code splitting, image compression,
                  and lazy loading.`,
    image: kinfolx,
    link: "https://kinfolx.onrender.com/",
  },
  {
    title: "Shadow-UI",
    technologies: "React • Storybook • CSS",
    description: `Shadow-UI is a neumorphic design system focused on accessibility
                  and ease of use. One of four contributors; work in progress.`,
    image: shadowUI,
    link: "https://www.shadow-ui.com/",
  },
  {
    title: "Microblog",
    technologies: "React • Redux • Node • Express • PostgreSQL",
    description: `Microblog is a full stack blogging application that allows users 
                  to create blog posts, add comments, and rank posts by votes.`,
    techDetail:`Redux Thunk is used to execute asynchronous API calls, with blog 
                titles and posts stored in separate data structures to optimize 
                loading.`,
    image: microblog,
    github: "https://github.com/paigegodfrey/microblog"
  },
  {
    title: "Square Generator",
    technologies: "React • JavaScript • CSS",
    description: `Square Generator is a small React app that allows users to create, duplicate,
                  and delete squares of prescribed colors and sizes.`,
    image: squares,
    link: "https://square-generator.netlify.app/",
    github: "https://github.com/paigegodfrey/square-generator/tree/mvp"
  },
  {
    title: "Flixster",
    technologies: "JavaScript • HTML • CSS",
    description: `Flixster is a Vanilla JavaScript movie application in which users 
                  can browse current movies, search titles, and view details, including
                  genre, duration, rating, and description.`,
    techDetail:`Application is styled with pure CSS and features flexbox and grid. Data 
                is sourced from The Movie Database API.`,
    image: flixster,
    link: "https://flixster.netlify.app/",
    github: "https://github.com/paigegodfrey/flixster"
  },
]

export default projects;
