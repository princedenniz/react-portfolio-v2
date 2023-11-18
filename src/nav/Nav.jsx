import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLocation, Link } from 'react-router-dom'
import astronautHelment from "../assets/astronaut-helmet.png"
import stack from "../assets/stack.png"
import envelop from "../assets/envelope.png"
import deadeye from "../assets/dead-eye.png"
import "../styles/nav.css"

function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch(location.pathname){
      case "/":
        return "nav-about"
      case "/skills":
        return "nav-skills"
      case "/projects":
        return "nav-projects"
      case "/contact":
        return "nav-contact";
        default:
          return "";
    }
  }

  const getPageTittle = () =>{
    switch(location.pathname){
      case "/":
        return "ABOUT"
      case "/skills":
        return "SKILLS"
      case "/projects":
        return "PROJECTS"
      case "/contact":
        return "CONTACT";
        default:
          return "";
    }
  }

  const NavPositionClass = getNavPositionClass();
  const PageTitle = getPageTittle();

  const isCurrentPage = (navClass) => {
    return navClass === NavPositionClass;
  }

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link"

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} className='nav-icon'/>
        {isCurrent && <h1 className='page-title'>{PageTitle}</h1>}
      </Link>
    )
  }

  return (
    <nav className={`nav ${NavPositionClass}`}>
      {renderNavLink("/", astronautHelment, "astronaunt helmet icon", "nav-about")}
      {renderNavLink("/skills", deadeye, "deadeye helmet icon", "nav-skills")}
      {renderNavLink("/projects", stack, "stack helmet icon", "nav-projects")}
      {renderNavLink("/contact", envelop, "envelop helmet icon", "nav-contact")}
    </nav>
  )
}

export default Nav
