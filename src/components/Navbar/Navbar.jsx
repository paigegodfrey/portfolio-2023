import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <div id="nav-style">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
