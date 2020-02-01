import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import VisibilityContextProvider from './contexts/VisibilityContext';
import WindowContextProvider from './contexts/WindowContext';

ReactDOM.render(
  <VisibilityContextProvider>
    <WindowContextProvider>
      <App /> 
    </WindowContextProvider>
  </VisibilityContextProvider>,
  document.getElementById('root')
);

