import './about.css' 
import React from 'react'

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <p className="paragraph">I was a bartender off and on for the last 12 years at a busy downtown bar where I developed very strong interpersonal
        skills and managed a team of bartenders in a fast paced and, at times, chaotic environment . Recently I spent 4 years
        running my own woodworking business where I designed, built, and sold household goods. I learned the craft through ADX,
        a local maker space, where I had the pleasure to learn from and work with many talented people and eventually began to
        create and teach classes of my own. I eventually decided that running my own business wasn't what I wanted to do and
        enrolled in Epicodus' coding bootcamp to learn how to develop software. I would say that my only regret now is that I
        hadn't started coding sooner! I absolutely love the problem solving and seemingly infinite pool of things to learn and
        can't wait to see where this next chapter of my life takes me.</p>
      </div>
      <div className="about-links-container">
        <a href="mailto:mabry1985@gmail.com" >
          <h3 className="links email">Email</h3>
        </a>
        <a href="https://www.github.com/mabry1985" target="_blank">
          <h3 className="links github">Github</h3>
        </a>
        <a href="https://www.linkedin.com/in/mabry1985/" target="_blank">
          <h3 className="links linked-in">Linked In</h3>
        </a>
        <a href="https://www.twitter.com/mabrycodes" target="_blank">
          <h3 className="links twitter">Twitter</h3>
        </a>
        <a href="https://www.codewars.com/users/mabry1985" target="_blank">
          <h3 className="links codewars">Codewars</h3>
        </a>
      </div>
      {/* <div className="quote-block">
        <h5 className="quote"><em>"Josh Mabry is a great coder, much wow!!"</em></h5>
        <h5 className="author">-Josh's Mom</h5>
      </div> */}
    </div>
  )
}

export default About
