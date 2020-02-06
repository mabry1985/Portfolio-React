import React,{ Component } from 'react';
import { Swipeable, LEFT, RIGHT } from 'react-swipeable';
import { Grid, Image, Icon, Header, Container, Label} from 'semantic-ui-react';
import { projectList } from './projectList';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      technologies: [],
      link: "",
      githubRepo: "",
      image: null,
      currentProjectIndex: 0,
      beginningOfProjects: true,
      endOfProjects: false,
      windowSize: this.props.windowSize
    };
  }

  componentDidMount() {
    this.updateProject(0);
  }

  updateProject = index => {
    const {
      title,
      description,
      technologies,
      link,
      githubRepo,
      image
    } = projectList[index];

    this.setState({
      title,
      description,
      technologies: this.formatTechnologies(technologies),
      link,
      githubRepo,
      image
    });
 
  };

  formatTechnologies = tech => {
    let updatedTech = [];
    for (let i = 0; i < tech.length; i++) {
      updatedTech.push(
        <Label className='tech-labels' color='teal' key={tech[i]}>{tech[i]}</Label>
      );
    }
    return updatedTech;
  };

  handlePointerRightClick = () => {
    let index = this.state.currentProjectIndex;
      index += 1;
    if (index >= projectList.length - 1) {
      this.setState({
        currentProjectIndex: index,
        endOfProjects: true,
        beginningOfProjects: false
      });
      this.updateProject(index);
    } else {
      this.setState({
        currentProjectIndex: index,
        endOfProjects: false,
        beginningOfProjects: false
      });
      this.updateProject(index);
    }
  };

  handlePointerLeftClick = () => {
    let index = this.state.currentProjectIndex;
      index -= 1;
    if (index === 0) {
      this.setState({
        currentProjectIndex: index,
        beginningOfProjects: true,
        endOfProjects: false
      });
      this.updateProject(index);
    } else {
      this.setState({
        currentProjectIndex: index,
        beginningOfProjects: false,
        endOfProjects: false
      });
      this.updateProject(index);
    }
  };

  onSwiping = ({ dir, first }) => {
    let index = this.state.currentProjectIndex;
    if (first && dir === LEFT && index < projectList.length - 1) {
      this.handlePointerRightClick();
    } 
    if (first && dir === RIGHT && index > 0) {
      this.handlePointerLeftClick();
    }
  };

  render() {
    const {
      title,
      description,
      technologies,
      link,
      githubRepo,
      image,
      beginningOfProjects,
      endOfProjects,
      windowSize,
      currentProjectIndex
    } = this.state;

    return (
      <Swipeable
        onSwiping={eventData => this.onSwiping(eventData)}
        trackMouse={false}
        preventDefaultTouchmoveEvent={false}
      >
        <div className="projects">
          {windowSize.width < 500 ? (
            <Header as="h5" id="swipe-info" dividing>
              Swipe to change project
            </Header>
          ) : null}

          <Grid stackable>
            <Grid.Row>
              <Grid.Column verticalAlign="middle" width={1} only="computer">
                <Icon
                  size="big"
                  className="project-arrows"
                  name="caret square left outline"
                  disabled={beginningOfProjects}
                  onClick={this.handlePointerLeftClick}
                />
              </Grid.Column>
              <Grid.Column width={10}>
                <Image 
                  className="project-image" 
                  src={image} 
                  rounded 
                  bordered 
                />
                {windowSize.width < 500 ? (
                  <p className="swipe-count">
                    {currentProjectIndex + 1} / {projectList.length}
                  </p>
                ) : null}
              </Grid.Column>
              <Grid.Column
                id="project-description-column"
                verticalAlign="middle"
                width={4}
              >
                <Container className="project-container">
                  <a
                    href={githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Header as="h2" className="project-title">
                      {title}
                    </Header>
                  </a>
                  <p>{description}</p>

                  {technologies}

                  {windowSize.width > 766 ? (
                    <div className="project-links">
                      {link && (
                        <Header as="h4">
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Demo Site
                          </a>
                          {link.includes("heroku") ? (
                            <p>
                              (This site is hosted on Heroku and may take a
                              little while to load)
                            </p>
                          ) : null}
                        </Header>
                      )}
                      <Header as="h4">
                        <a
                          href={githubRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github Repo
                        </a>
                      </Header>
                    </div>
                  ) : null}
                </Container>
              </Grid.Column>
              <Grid.Column verticalAlign="middle" width={1} only="computer">
                <Icon
                  size="big"
                  className="project-arrows"
                  name="caret square right outline"
                  onClick={this.handlePointerRightClick}
                  disabled={endOfProjects}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Swipeable>
    );
  }
}

export default Projects
