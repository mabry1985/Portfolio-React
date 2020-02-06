import React, { createContext, useState, useEffect } from 'react';
import { useWindowSize } from '../listeners/useWindowSize';

export const WindowContext = createContext();

const WindowContextProvider = (props) => {
  const size = useWindowSize();

  const [windowSize, changeWindowSize] = useState(size);
  const [landscapeMode, toggleLandscape] = useState(false);

  useEffect(() => {
    changeWindowSize(size);
    toggleLandscape(handleLandscapeToggle(size));
  }, [size])

  const handleLandscapeToggle = (size) =>{
    if (size.width > size.height && size.height < 736) {
      return true;
    } else if (size.width < size.height && size.width < 813) {
      return false;
    }
  }

  return (
    <WindowContext.Provider value={{ windowSize, landscapeMode }}>
      {props.children}
    </WindowContext.Provider>
  );
}

export default WindowContextProvider

