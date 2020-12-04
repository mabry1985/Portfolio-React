import React, { useContext } from 'react';

import ResponsiveNav from './components/navigation/ResponsiveNav';
import LandingPage from './components/LandingPage';
import MainContent from './components/MainContent';
import LandscapeMode from './components/responsive/LandscapeMode';

import { VisibilityContext } from './contexts/VisibilityContext';
import { WindowContext } from './contexts/WindowContext';
import HamburgerMenu from './components/navigation/HamburgerMenu';

const App = () => {
  const { navBarVisible } = useContext(VisibilityContext);
  const { landscapeMode, windowSize } = useContext(WindowContext);
  let content;

if (navBarVisible && windowSize.width > 766) {
    content = (
      <React.Fragment>
        <ResponsiveNav/>
        <MainContent/>
      </React.Fragment>
    )
  } else if (navBarVisible && windowSize.width < 766) {
      content = <HamburgerMenu/>
  } else {
      content = <LandingPage/>
  }

  return (
    <div className="App">
      {content}
    </div>
  )
}

export default App

