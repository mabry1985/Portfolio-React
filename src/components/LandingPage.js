import React, { useContext } from 'react';
import { Grid, Container, Image, Header } from 'semantic-ui-react';

import { VisibilityContext } from '../contexts/VisibilityContext';

import headshot from '../assets/Headshot.png';

const LandingPage = () => {
  const { handleProjectClick, handleAboutClick } = useContext(VisibilityContext);

  return (
    <React.Fragment>
      <Grid stackable reversed="mobile">
        <Grid.Row>
          <Grid.Column width={8}>
            <div className="img-container">
              <Image className="headshot" src={headshot} />
            </div>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" textAlign="center" width={8}>
            <Container>
              <Grid.Row>
                <Header as="h1" id="name">
                  Josh Mabry
                </Header>
                <Header as="h3" id="subtitle">
                  Fullstack Web Developer
                </Header>
              </Grid.Row>
              <Grid.Row only="computer tablet" id="links-container">
                <Header
                  as="h3"
                  className="lp-links projects-lp"
                  onClick={handleProjectClick}
                >
                  Projects
                </Header>
                <Header
                  as="h3"
                  className="lp-links about-lp"
                  onClick={handleAboutClick}
                >
                  About
                </Header>
              </Grid.Row>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}

export default LandingPage
