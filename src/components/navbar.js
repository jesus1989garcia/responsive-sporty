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
            LigApp
            <i className="fas fa-futbol"></i>
          </NavLink>
          <ul className={ click ? "nav-menu active" : "nav-menu"}>
           
            <li className="nav-item">
              <NavLink exact to="/" className="nav-links" activeClassName="active" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/allmatches" className="nav-links" activeClassName="active" onClick={handleClick}>
                Next matches
              </NavLink>
            </li> 
            <li className="nav-item">
              <NavLink exact to="/highlights" className="nav-links" activeClassName="active" onClick={handleClick}>
                Highlights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact-us" className="nav-links" activeClassName="active" onClick={handleClick}>
                Contact us
              </NavLink>
            </li>
            
          </ul> 
           
          

          <div className="nav-icon" onClick={ handleClick }>
            {/* <i className={click ? "fas fa-window-close":"fas fa-chevron-down"}></i> */}
            { click ? <FontAwesomeIcon icon={faWindowClose} /> : <FontAwesomeIcon icon={faChevronDown}/> }
          </div>

        </div>

      </nav>
    </>
  )
}

export default NavBar