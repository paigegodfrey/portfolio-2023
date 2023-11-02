import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <div id="nav-style">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="home nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="projects nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="about nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
