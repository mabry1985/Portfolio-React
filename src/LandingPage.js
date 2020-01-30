import React, { useContext } from 'react';
import { Grid, Container, Image, Header } from 'semantic-ui-react';
import headshot from './assets/Headshot.png';
import { VisibilityContext } from './contexts/VisibilityContext';

const LandingPage = (props) => {
  const { handleProjectClick, handleAboutClick } = useContext(VisibilityContext);
  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <div className="img-container">
            <Image className="headshot" src={headshot}/>
          </div>
        </Grid.Column>
        <Grid.Column 
          verticalAlign='middle' 
          textAlign='center' 
          width={8}
        >
          <Container>
            <Grid.Row only='mobile'>
              <Header as='h1' id="name">
                Josh Mabry
              </Header>
              <Header as='h3' id="subtitle">
                Fullstack Web Developer
              </Header>
            </Grid.Row>
            <Grid.Row only='mobile'>
              <div className="links-container">
                <h3 className="lp-links projects-lp"
                    onClick={handleProjectClick}>
                    Projects
                </h3>
                <h3 className="lp-links about-lp"
                    onClick={handleAboutClick}>
                    About
                </h3>
              </div>
            </Grid.Row>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default LandingPage
