import React, { Component } from 'react';
import './navbar.css';
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
              <h5 className="name-nav">Josh Mabry</h5>
              {/* <div className="link-background"></div> */}
              <ul>
                <li style={projectStyles}
                    className="projects-nav"
                    onClick={this.props.onProjectClick}>
                    Projects
                </li>
                <li style={aboutStyles}
                    className="about-nav"
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
