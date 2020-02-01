import React, { useState, useContext } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { VisibilityContext } from './contexts/VisibilityContext';
import MainContent from './MainContent';
import LandingPage from './LandingPage';

const HamburgerMenu = () => {
  const { navbarVisible, handleProjectClick, handleAboutClick, handleNavbarVisibility} = useContext(VisibilityContext)
  const [visible, toggleVisible] = useState(false);

  return (
    <div>
      <nav>
        <Icon
          id="hamburger-icon"
          name="sidebar"
          size="big"
          onClick={() => toggleVisible(true)}
        />
      </nav>

      <Sidebar.Pushable as="div">
        <Sidebar
          className="hamburger-menu"
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={() => toggleVisible(false)}
          vertical
          direction="right"
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a" onClick={() => handleProjectClick()}>
            <h3 className="hamburger-links">Projects</h3>
          </Menu.Item>
          <Menu.Item as="a" onClick={() => handleAboutClick()}>
            <h3 className="hamburger-links">About</h3>
          </Menu.Item>
          <Menu.Item
            as="a"
            href="https://drive.google.com/file/d/15X8GmKS3durO2wB7yS5FmdBYmJld7srU/view?usp=sharing"
            target="_blank"
          >
            <h3 className="hamburger-links">Resume</h3>
          </Menu.Item>
          <Menu.Item
            as="a"
            href="https://www.github.com/mabry1985"
            target="_blank"
          >
            <h3 className="hamburger-links">Github</h3>
          </Menu.Item>
          <Menu.Item
            as="a"
            href='https://www.linkedin.com/in/mabry1985/'
            target="_blank"
          >
            <h3 className="hamburger-links">LinkedIn</h3>
          </Menu.Item>
          <Menu.Item as="a" onClick={() => handleNavbarVisibility()}>
            <h3 className="hamburger-links">Home</h3>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher className="hamburger-container" dimmed={visible}>
          {navbarVisible ? <LandingPage /> : <MainContent />}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default HamburgerMenu
