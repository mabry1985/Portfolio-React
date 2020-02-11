import jobbot from '../../assets/jobbot.png';
import devChat from '../../assets/DevChat.png';
import paperTrader from '../../assets/PaperTrader.png';
import holeitw from '../../assets/holeitw.png';

  export const projectList = [
    {
      title: "DevChat",
      description:
        "This is a slack clone I made to practice React and Redux. I used Firebase for authentication, database, and deployment. To avoid signing up you can use email: Test@test.com and password: Qwerty",
      technologies: ["React", "Redux", "Firebase", "Semantic UI"],
      link: "https://slack-6f481.firebaseapp.com/",
      githubRepo: "https://github.com/mabry1985/DevChat",
      image: devChat,
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
    },
    {
      title: "Paper Trader",
      description:
        "This is a Ruby on Rails application that was built in three days by me and three fellow students at Epicodus for our team-week project. I built out the functionality for user authentication, interacted with the API, and manipulated that data. I also was in charge of deployment to Heroku",
      technologies: ["Ruby", "Rails", "PSQL", "Heroku", "Chart.js"],
      link: "http://floating-scrubland-71604.herokuapp.com/",
      githubRepo: "https://github.com/mabry1985/paper_trader",
      image: paperTrader,
    },
    {
      title: "Hole in the Wall",
      description:
        "This is an experimental app I made for my capstone at Epicodus, using React and Redux. My main goal was to create a pleasant interface that functioned like a native app and to eventually port it over to an Electron or VR app.",
      technologies: ["React", "Redux", "Firebase"],
      link: "",
      githubRepo: "https://github.com/mabry1985/hole-in-the-wall.git",
      image: holeitw,
    }
  ];