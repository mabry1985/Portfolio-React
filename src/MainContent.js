import React, { useContext } from 'react'

import { VisibilityContext } from './contexts/VisibilityContext';
import { WindowContext } from './contexts/WindowContext';

import Projects from './Projects';
import About from './About';

const MainContent = () => {
  const { projectSelected } = useContext(VisibilityContext)
  const { windowSize } = useContext(WindowContext);
  const size = windowSize;

  const content = projectSelected ? <Projects windowSize={size}/> : <About/>
  
  return (
    <div id="main-content">
      {content}
    </div>
  )
}

export default MainContent
