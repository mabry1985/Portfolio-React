import React from 'react'
import headshot from './assets/Headshot.png';
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="container">
      <div className="img-container">
        <img className="headshot" src={headshot} alt="headshot of Josh Mabry" />
      </div>
      <div className="info">
        <h1 className="name">Josh Mabry</h1>
        <h3 className="subtitle">Fullstack Web Developer</h3>
        <div className="links-container">
          <h3 className="lp-links projects-lp"
              onClick={props.onProjectClick}>
              Projects
          </h3>
          <h3 className="lp-links about-lp"
              onClick={props.onAboutClick}>
              About
          </h3>
        </div>
    </div>
  </div>
  )
}

export default LandingPage
