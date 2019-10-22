import React, { Component } from 'react';
import NavBar from './NavBar';

export class App extends Component {
  state = {
    projectSelected: false, 
    navBarVisible: false,
  }

  handleNavbarVisibility = () => {

  }

  handleAboutClick = () => {
    this.setState({ projectSelected: false });
  }

  handleProjectClick = () => {
    this.setState({ projectSelected: true});
  }

  render(){
    let content

    if (this.state.navBarVisible === false) {
      content = 
        < NavBar projectSelected = { this.state.projectSelected }
        onProjectClick = { this.handleProjectClick }
        onAboutClick = { this.handleAboutClick } />
      }
    return (
      <div className="App">
      {content}
      </div>
    )
  }
}

export default App;
