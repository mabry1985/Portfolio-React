import React, { Component } from 'react';

import Projects from './Projects';
import About from './About';

export class NavBar extends Component {
  
  render() {
    let projectStyles = {};
    let aboutStyles = {};
    let content;

    if (this.props.projectSelected === true) {
      projectStyles = {
        backgroundColor: '#E6F4FA',
        borderRadius: '15px',
      }
      aboutStyles = {}
      content = <Projects/>
    } else {
      aboutStyles = {
        backgroundColor: '#E6F4FA',
        borderRadius: '15px',
      }
      projectStyles = {}
      content = <About/>
    }

    return (
        <div className="main">
          <div id="nav">
              <h5 id="name-nav"
                  onClick={this.props.onLogoClick}>Josh Mabry</h5>
              <ul>
                <li style={projectStyles}
                    id="projects-nav"
                    onClick={this.props.onProjectClick}>
                    Projects
                </li>
                <li style={aboutStyles}
                    id="about-nav"
                    onClick={this.props.onAboutClick}>
                    About
                </li>
              </ul>
            </div>
          {content}
        </div>
    )
  }
}

export default NavBar
