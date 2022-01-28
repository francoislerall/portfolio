export const ProjectsData = [
  {
    title: "Automated UAV",
    location: "KTH Royal Institute of Technology, Stockholm",
    locationLink: "https://www.kth.se/en",
    date: "2019",
    about:
      "Implementation and integration of autonomous navigation functions in a Crazyflie drone using Robot Operating System (ROS). The UAV was able to fly through gates and  to recognize road signs.",
    tags: ["Python", "ROS", "Gazebo"],
    image: require("assets/crazyflie.jpg"),
  },
  {
    title: "Personal Website",
    about: "First iteration of my personal website built with React and hosted on Netlify.",
    tags: ["JS", "Node", "Material UI"],
    demo: window.location.href,
    github: "https://github.com/francoislerall/portfolio",
    image: require("assets/portfolio.png"),
  },
  {
    title: "Music Controller Apps",
    about: "In order to dive into React and Django, I found a course that I spun into a week project. The Music Controller allow the users to next the music played on Spotify with a vote system.",
    tags: ["JS", "Python", "Django", "Node", "Material UI", "Spotify API"],
    github: "https://github.com/francoislerall/music-controller",
    image: require("assets/music-controller.png"),
  },
  {
    title: "Photovoltaic balloon",
    location: "Zephyr Solar/EONEF",
    locationLink: "https://eonef.com/",
    date: "2016-2017",
    about:
      "Design, sizing of helium balloons covered with photovoltaic panels supplying refugee camps or makeshift hospitals. Numerical study of open atmospheric balloon dynamics.",
    tags: [],
    image: require("assets/eonef.jpeg"),
  },
  {
    title: "Cooling device",
    location: "LMFA, École centrale de Lyon",
    locationLink: "http://lmfa.ec-lyon.fr/",
    date: "2015-2016",
    about:
      "Development of a system controlling the temperature of a pressure sensor of the Laboratory of Fluid Mechanics and Acoustics with Peltier effect module.",
    tags: ["Arduino", "ANSYS", "CATIA"],
    image: require("assets/lmfa.png"),
  },
];
