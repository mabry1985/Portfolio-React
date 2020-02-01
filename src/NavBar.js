import React, { useContext } from 'react';
import { VisibilityContext } from './contexts/VisibilityContext';
import MainContent from './MainContent';

const NavBar = () => {
  const { handleProjectClick, handleAboutClick, handleNavbarVisibility, projectSelected } = useContext(VisibilityContext);
  let projectStyles = {};
  let aboutStyles = {};

  if (projectSelected === true) {
    projectStyles = {
      backgroundColor: '#E6F4FA',
      borderRadius: '15px',
    }
    aboutStyles = {}
  } else {
    aboutStyles = {
      backgroundColor: '#E6F4FA',
      borderRadius: '15px',
    }
    projectStyles = {}
  }

  return (
    <div>
      <div className="main">
        <div id="nav">
          <h5 id="name-nav"
            onClick={() => handleNavbarVisibility()}>Josh Mabry</h5>
          <ul>
            <li style={aboutStyles}
              id="about-nav"
              onClick={() => handleAboutClick()}>
              About
            </li>
            <li style={projectStyles}
              id="projects-nav"
              onClick={() => handleProjectClick()}>
              Projects
            </li>
          </ul>
        </div>
        <MainContent/>
      </div>
    </div>
  )
}

export default NavBar;

