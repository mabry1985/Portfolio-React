import React, { useContext } from 'react';

import NavBar from './PageContainer';
import LandingPage from './LandingPage';
import { VisibilityContext } from './contexts/VisibilityContext';

const App = () => {
  const { navBarVisible } = useContext(VisibilityContext);

  let content;
  
if (navBarVisible === true) {
    content = <NavBar/>
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

