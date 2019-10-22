import React, { Component } from 'react';
import NavBar from './NavBar';
import LandingPage from './LandingPage';

export class App extends Component {
  state = {
    projectSelected: false, 
    navBarVisible: true,
  }

  handleNavbarVisibility = () => {
    this.setState({ navBarVisible: !this.state.navBarVisible})
  }

  handleAboutClick = () => {
    this.setState({ 
      projectSelected: false,
      navBarVisible: true,
    });
  }

  handleProjectClick = () => {
    this.setState({ 
      projectSelected: true,
      navBarVisible: false,
    });
  }

  render(){
    let content;

    if (this.state.navBarVisible === true) {
      content = 
        < NavBar projectSelected = { this.state.projectSelected }
                onProjectClick = { this.handleProjectClick }
                onAboutClick = { this.handleAboutClick } 
                onLogoClick = {this.handleNavbarVisibility}/>
      } else {
        content = 
          <LandingPage projectSelected={this.state.projectSelected}
                      onProjectClick={this.handleProjectClick}
                      onAboutClick={this.handleAboutClick} />
      }

    return (
      <div className="App">
      {content}
      </div>
    )
  }
}

export default App;
