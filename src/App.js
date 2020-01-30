import React, { useContext } from 'react';

import NavBar from './PageContainer';
import LandingPage from './LandingPage';
import { VisibilityContext } from './contexts/VisibilityContext';
import { WindowContext } from './contexts/WindowContext';

const App = () => {
  const { navBarVisible } = useContext(VisibilityContext)
  const { windowSize } = useContext(WindowContext);
  let content;

  if (navBarVisible === true) {
    content =
      <NavBar/>
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

