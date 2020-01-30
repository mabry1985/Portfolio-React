import React, { useState, useContext } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { VisibilityContext } from './contexts/VisibilityContext';
import MainContent from './MainContent';

const HamburgerMenu = () => {
  const { handleProjectClick, handleAboutClick, handleNavbarVisibility} = useContext(VisibilityContext)
  const [visible, toggleVisible] = useState(false);

  return (
    <div>
      <nav>
        <Icon
          id="hamburger-icon"
          name='sidebar'
          size='big'
          onClick={() => toggleVisible(true)}
        /> 
      </nav>
      
      <Sidebar.Pushable as='div'>
        <Sidebar
          className='hamburger-menu'
          as={Menu}
          animation='overlay'
          icon='labeled'
          onHide={() => toggleVisible(false)}
          vertical
          direction='right'
          visible={visible}
          width='thin'
        >
          <Menu.Item 
            as='a' 
            onClick={() => handleProjectClick()}
          >
            <h3 className='hamburger-links'>Projects</h3>
          </Menu.Item>
          <Menu.Item 
            as='a'
            onClick={() => handleAboutClick()}
          >
            <h3 className='hamburger-links'>About</h3>
          </Menu.Item>
          <Menu.Item 
            as='a'
            onClick={() => handleNavbarVisibility()}
          >
            <h3 className='hamburger-links'>Home</h3>
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <MainContent />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default HamburgerMenu
