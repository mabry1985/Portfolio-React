import React from 'react'
import { Grid, Container, Header } from "semantic-ui-react";

const About = () => {
  return (
    <Grid stackable reversed={true} >
      <Grid.Row verticalAlign='top'>
        <Grid.Column width={10}>
          <Container>
            <Header 
              as='h3' 
              id='about-header'
              dividing
            >
              About Me
            </Header>
            <p className='about'>
              I was a bartender off and on for the last 12 years at a busy downtown
              bar where I developed strong interpersonal skills and managed a team
              of bartenders in a fast paced and, at times, chaotic environment .
              Recently I spent 4 years running my own woodworking business where I
              designed, built, and sold household goods. I learned the craft through
              ADX, a local maker space, where I had the pleasure to learn from and
              work with many talented people and eventually began to create and
              teach classes of my own. I eventually decided that running my own
              business wasn't what I wanted to do and enrolled in Epicodus' coding
              bootcamp to learn how to develop software. I would say that my only
              regret now is that I hadn't started coding sooner! I absolutely love
              the problem solving and seemingly infinite pool of things to learn and
              can't wait to see where this next chapter of my life takes me.
            </p>
          </Container>
        </Grid.Column>
        <Grid.Column only='tablet computer'>

        </Grid.Column>
  
        <Grid.Column width={3} verticalAlign='middle'>
          <Container>
          <a
            href="https://drive.google.com/file/d/15X8GmKS3durO2wB7yS5FmdBYmJld7srU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="links resume">Resume</h3>
          </a>
          <a href="mailto:mabrycodes@gmail.com">
            <h3 className="links email">Email</h3>
          </a>
            <a 
              href="https://www.github.com/mabry1985" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <h3 className="links github">Github</h3>
          </a>
            <a 
              href="https://www.linkedin.com/in/mabry1985/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <h3 className="links linked-in">Linked In</h3>
          </a>
            <a 
              href="https://www.codewars.com/users/mabry1985" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <h3 className="links codewars">Codewars</h3>
          </a>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default About
