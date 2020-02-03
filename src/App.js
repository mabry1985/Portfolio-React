import React, { useContext } from 'react';

import ResponsiveNav from './components/navigation/ResponsiveNav';
import LandingPage from './components/LandingPage';
import MainContent from './components/MainContent';
import LandscapeMode from './components/responsive/LandscapeMode';

import { VisibilityContext } from './contexts/VisibilityContext';
import { WindowContext } from './contexts/WindowContext';

const App = () => {
  const { navBarVisible } = useContext(VisibilityContext);
  const { landscapeMode } = useContext(WindowContext);
  let content;

  if (landscapeMode) {
    content = <LandscapeMode/>
  } else if (!landscapeMode && navBarVisible === true) {
      content = (
        <React.Fragment>
          <ResponsiveNav/>
          <MainContent/>
        </React.Fragment>
      )
    } else if (!landscapeMode) {
      content = <LandingPage/>
    }

  return (
    <div className="App">
      {content}
    </div>
  )
}

export default App

