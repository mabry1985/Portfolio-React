import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';
import headshot from './assets/Headshot.png';

const LandingPage = (props) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <div className="img-container">
            <Image src={headshot}/>
          </div>
        </Grid.Column>
        <Grid.Column 
          verticalAlign='middle' 
          textAlign='center' 
          width={8}
        >
          <Container>
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
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default LandingPage
