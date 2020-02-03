import React, { useContext } from 'react'

import { VisibilityContext } from '../contexts/VisibilityContext';
import { WindowContext } from '../contexts/WindowContext';

import Projects from './projects/Projects';
import About from './About';

const MainContent = () => {
  const { projectSelected } = useContext(VisibilityContext)
  const { windowSize } = useContext(WindowContext);
  const size = windowSize;
  
  return (
    <div id="main-content">
      {projectSelected ? <Projects windowSize={size}/> : <About/>}
    </div>
  )
}

export default MainContent
