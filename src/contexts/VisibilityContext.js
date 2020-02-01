import React, { createContext, useState } from 'react';

export const VisibilityContext = createContext();

const VisibilityContextProvider = (props) => {
  const [projectSelected, toggleProjectSelected] = useState(false);
  const [navBarVisible, toggleNavBarVisible] = useState(false);

  const handleNavbarVisibility = () => {
    toggleNavBarVisible(!navBarVisible);
  }

  const handleAboutClick = () => {
    toggleProjectSelected(false);
    toggleNavBarVisible(true);
  }

  const handleProjectClick = () => {
    toggleProjectSelected(true);
    toggleNavBarVisible(true);
  }

  return (
    <VisibilityContext.Provider value={{projectSelected, navBarVisible, handleNavbarVisibility, handleAboutClick, handleProjectClick }}>
      {props.children}
    </VisibilityContext.Provider>
  )
}

export default VisibilityContextProvider
