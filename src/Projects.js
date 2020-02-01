import React,{ Component } from 'react';
import { Swipeable, LEFT, RIGHT } from 'react-swipeable';

import { Grid, Image, Icon, Header, Container, Label} from 'semantic-ui-react';

import jobbot from './assets/jobbot.png';
import devChat from './assets/DevChat.png';
import paperTrader from './assets/PaperTrader.png';
import holeitw from './assets/holeitw.png';

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
    } = this.projects[index];

    this.setState({
      title,
      description,
      technologies: this.formatTechnologies(technologies),
      link,
      githubRepo,
      image
    });
  };

  projects = [
    {
      title: "DevChat",
      description:
        "This is a slack clone I made to practice React and Redux. I used Firebase for authentication, database, and deployment. To avoid signing up you can use email: Test@test.com and password: Qwerty",
      technologies: ["React", "Redux", "Firebase", "Semantic UI"],
      link: "https://slack-6f481.firebaseapp.com/",
      githubRepo: "https://github.com/mabry1985/DevChat",
      image: devChat,
      mobileFriendly: true
    },
    {
      title: "jobBot",
      description:
        "This is a dashboard I made to render the data scraped using my JobBot webcrawler. The crawler currently scrapes four job boards and collects the data in a Mongo Atlas database. Links to both the webcrawler and server can be found in the README for this project.",
      technologies: [
        "React",
        "Mongoose",
        "Express",
        "Node",
        "D3",
        "Heroku",
        "Styled Components"
      ],
      link: "https://jobbot-dashboard.herokuapp.com",
      githubRepo: "https://github.com/mabry1985/jobBot-dashboard",
      image: jobbot,
      mobileFriendly: true
    },
    {
      title: "Paper Trader",
      description:
        "This is a Ruby on Rails application that was built in three days by me and three fellow students at Epicodus for our team-week project. I built out the functionality for user authentication, interacted with the API, and manipulated that data. I also was in charge of deployment to Heroku",
      technologies: ["Ruby", "Rails", "PSQL", "Heroku", "Chart.js"],
      link: "http://floating-scrubland-71604.herokuapp.com/",
      githubRepo: "https://github.com/mabry1985/paper_trader",
      image: paperTrader,
      mobileFriendly: false
    },
    {
      title: "Hole in the Wall",
      description:
        "This is an experimental app I made for my capstone at Epicodus, using React and Redux. My main goal was to create a pleasant interface that functioned like a native app and to eventually port it over to an Electron or VR app.",
      technologies: ["React", "Redux", "Firebase"],
      link: "",
      githubRepo: "https://github.com/mabry1985/hole-in-the-wall.git",
      image: holeitw,
      mobileFriendly: false
    }
  ];

  formatTechnologies = tech => {
    let updatedTech = [];
    for (let i = 0; i < tech.length; i++) {
      updatedTech.push(<Label color='teal' key={tech[i]}>{tech[i]}</Label>);
    }
    return updatedTech;
  };

  handlePointerRightClick = () => {
    let index = this.state.currentProjectIndex;
      index += 1;
    if (index >= this.projects.length - 1) {
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
    if (first && dir === LEFT && index < this.projects.length - 1) {
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

    const leftArrow = (
      <Icon
        size="big"
        className="project-arrows"
        name="caret square left outline"
        disabled={beginningOfProjects}
        onClick={this.handlePointerLeftClick}
      />
    );

    const rightArrow = (
      <Icon
        size="big"
        className="project-arrows"
        name="caret square right outline"
        onClick={this.handlePointerRightClick}
        disabled={endOfProjects}
      />
    );

    return (
      <Swipeable
        onSwiping={eventData => this.onSwiping(eventData)}
        trackMouse={false}
        preventDefaultTouchmoveEvent={true}
      >
        <div className="projects">
          {windowSize.width < 500 ? (
            <p className="swipe-info">Swipe to change project</p>
          ) : null}

          <Grid stackable>
            <Grid.Row>
              <Grid.Column verticalAlign="middle" width={1} only="computer">
                {leftArrow}
              </Grid.Column>
              <Grid.Column width={10}>
                <Image src={image} rounded bordered />
                {windowSize.width < 500 ? 
                  <p className="swipe-count">
                    {currentProjectIndex + 1} / {this.projects.length}
                  </p>
                  : null
                }

              </Grid.Column>
              <Grid.Column verticalAlign="middle" width={4}>
                <Container className="project-container">
                  <Header as="h2" className="project-title">
                    {title}
                  </Header>
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
                            (This site is hosted on Heroku and may take a little
                            while to load)
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
                {rightArrow}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Swipeable>
    );
  }
}

export default Projects