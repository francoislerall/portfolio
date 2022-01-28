export const ExperienceData = [
  {
    id: 0,
    company: "Nomagic",
    link: "https://nomagic.ai/",
    location: "Warsaw",
    designation: "Robotic/Software Engineer",
    dates: "April - December 2019",
    companyLogo: <img src={require("assets/icons/nomagic.png")} alt="logo of the Nomagic company" />,
    about: [
      {
        info: "Building of advanced pick and place robot control system - from design, through implementation to support in production.",
      },
      {
        info: "Collect real-time signals from robots for better introspection and debugging capabilities and work on the real-world problems that customers have, debugging problems, supporting systems deployed at customer sites.",
      },
      {
        info: "Django internal website maintenance (app displaying the data (images, graphs, video) stored on GCP) from the dev. and prod. robots of the company.",
      },
    ],
  },
  {
    id: 1,
    company: "Nomagic",
    link: "https://nomagic.ai/",
    location: "Warsaw",
    designation: "Robotic Engineer Trainee",
    dates: "September 2018 - March 2019",
    companyLogo: <img src={require("assets/icons/nomagic.png")} alt="logo of the Nomagic company"/>,
    about: [
      {
        info: "Estimation of the mass of a manipulator payload in motion by means of an FT sensor.",
      },
      {
        info: "Design of a mechanical model of the vacuum gripper cup is derived to approximate the inertial parameters with a Recursive Total Least Squares algorithm.",
      },
    ],
  },
  {
    id: 2,
    company: "Energy Generation",
    link: "https://www.energy-generation.org/",
    designation: "Technical Director ",
    dates: "September 2017 - March 2018",
    companyLogo: <img src={require("assets/icons/eg.png")} alt="logo of the Energy Generation company"/>,
    about: [
      {
        info: "Management of nine energy projects run by entrepreneurs from all over Africa (solar, wind, biogas, water electrolysis plant, pyrolysis).",
      },
      {
        info: "Development of the educational model of an academy dedicated to entrepreneurship; teaching—in English and French—of technical concepts.",
      },
      { info: "Setting up an Energy FabLab in the Togolese capital." },
    ],
  },
  {
    id: 3,
    company: "Sentryway",
    link: "https://www.sentryway.com/",
    designation: "Mechanical Design Engineer Trainee",
    dates: "April - September 2017",
    companyLogo: <img src={require("assets/icons/sentryway.png")} alt="logo of the Sentryway company"/>,
    about: [
      {
        info: "Design—using CATIA—of the mechanical body of a railway camera intended to browse the shelves of warehouses and malls.",
      },
    ],
  },
];
