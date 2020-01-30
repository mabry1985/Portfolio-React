import React, { useContext } from 'react';
import NavBar from './NavBar';
import { WindowContext } from './contexts/WindowContext';
import HamburgerMenu from './HamburgerMenu';

const PageContainer = () => {
  const { windowSize } = useContext(WindowContext);
  
  const nav = windowSize.width > 500 ? <NavBar/> : <HamburgerMenu/>;

  return (
    <div>
      {nav}
    </div>
  )
}

export default PageContainer

