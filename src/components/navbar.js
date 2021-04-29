import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../navbar.css"
import  { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import  { faWindowClose } from '@fortawesome/free-solid-svg-icons/faWindowClose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function NavBar() {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return(
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Logo
            <i className="fas fa-football-ball"></i>
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-links" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-links" activeClassName="active">
                About
              </NavLink>
            </li> 
            <li className="nav-item">
              <NavLink exact to="/services" className="nav-links" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact-us" className="nav-links" activeClassName="active">
                Contact us
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={ handleClick }>
            {/* <i className={click ? "fas fa-window-close":"fas fa-chevron-down"}></i> */}
            { !click ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faWindowClose}/> }
          </div>

        </div>

      </nav>
    </>
  )
}

export default NavBar