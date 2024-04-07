import {
  java,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  techolution,
  dp,
  IIITV,
  GFG,
  HK,
  flutter,
  crypto,
  mobivax,
  dodonate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Application Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Techolution",
    icon: techolution,
    iconBg: "#383E56",
    date: "Jul-2023 - Present",
    points: [
      "Led comprehensive AI product development at Techoluition, overseeing full stack responsibilities",
      "Engineered robust RESTful APIs utilizing MongoDB and Express JS for improved backend efficiency by 30%",
      "Applied diverse technologies such as React, Node, Material UI, and MVC for developing intricate applications",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
  title: "Fullstack Developer",
    company_name: "Drink Prime",
    icon: dp,
    iconBg: "#383E56",
    date: "Jul-2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "GeeksForGeeks",
    icon: GFG,
    iconBg: "#E6DEDD",
    date: "Mar-2023-Jul-2023",
    points: [
     " Build effecient and scalabel web pages and components using ReactJsand NEXTJs",
      " Designed the complete userstreak density graph for geeksforgeeks which is live on website",
       "Used RTK Queries for data fetching and caching"
    ],
  },
  {
    title: "Web Developer",
    company_name: "IIITV",
    icon: IIITV,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js, Metamask, Hardhat and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Hacker Kernel",
    icon: HK,
    iconBg: "#E6DEDD",
    date: "Jun-2021-Aug-2021",
    points: [
      "Developing and maintaining mobile applications using Flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crypto Hunter",
    description:
      "Developed a cutting-edge web application utilizing React.js, Material UI, and API integration to provide real-time market data for the top 50 Crypto Currencies",
    tags: [
      {
        name: "react-js",
        color: "blue-text-gradient",
      },
      {
        name: "chart-js",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/dev-shubham01/Crypto_Hunter",
    demo_link:"https://crypto-hunter-s.netlify.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: mobivax,
    source_code_link: "https://github.com/dev-shubham01/Mobivax",
    demo_link:"https://mobivax.netlify.app/",
  },
  {
    name: "Do Donate",
    description:
      "Developed to promote blood donations in exchange of health benefits and prevents forced or illegal blood donations and reduces blood shortage",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "twilio",
        color: "green-text-gradient",
      },
      {
        name: "rapid-api",
        color: "pink-text-gradient",
      },
    ],
    image: dodonate,
    source_code_link: "https://github.com/Err0r4-0-4/DoDonate",
    demo_link:"https://dodonate.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
