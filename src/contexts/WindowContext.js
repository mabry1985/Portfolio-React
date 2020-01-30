import React, { createContext, useState, useEffect } from 'react';
import { useWindowSize } from '../listeners/useWindowSize';

export const WindowContext = createContext();

const WindowContextProvider = (props) => {
  const size = useWindowSize();

  const [windowSize, changeWindowSize] = useState(size);

  useEffect(() => {
    changeWindowSize(size);
  }, [size])

  return (
    <WindowContext.Provider value={{ windowSize }}>
      {props.children}
    </WindowContext.Provider>
  )
}

export default WindowContextProvider

