import React from 'react';
import './projects.css';
import jobbot from './assets/jobbot.png';

class Projects extends React.Component{
  state = {
    title: "",
    description: "",
    technologies: [],
    link: "",
    githubRepo: "",
    image: null
  }

  componentDidMount() {
    const { title, description, technologies, link, githubRepo, image } = this.projects[0];
    this.setState({
      title,
      description, 
      technologies,
      link,
      githubRepo,
      image
    })
  }
  

  projects = {
    0: {
      title: "JobBot",
      description: "This is a dashboard I made to render the data I've been scraping using my JobBot webcrawler. Links to both the the webcrawler and server can be found in the README for this project.",
      technologies: ["React", "Mongoose", "Express", "Node","D3"],
      link: "https://jobbot-dashboard.herokuapp.com",
      githubRepo: "https://github.com/mabry1985/jobBot-dashboard",
      image: jobbot
    },
    1: {

    }
  }

  render(){
    const { title, description, technologies, link, githubRepo, image} = this.state;

    return (
      <div>
        <img src={image} alt={title}/>
        <h1>{title}</h1>
        <p>{description}</p>
    {technologies.map(el => <p>{el}</p>)}
    <a href={link}>Website</a>
    <a href={githubRepo}>Github Repository</a>
      </div>
    );
  }
}

export default Projects
