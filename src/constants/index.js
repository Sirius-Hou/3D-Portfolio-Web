import {
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
  meta,
  starbucks,
  tesla,
  shopify,
  christie,
  ford,
  bhvr,
  uw,
  carrent,
  jobit,
  tripguide,
  threejs,
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
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "photography",
    title: "Photography",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Application Software Developer (C++)",
    company_name: "Christie Digital Systems",
    icon: christie,
    iconBg: "#383E56",
    date: "Sep 2024 ~ Present",
    points: [
      "Developed a black level correction algorithm with MATLAB to address brightness and color inconsistencies in laser projectors; Integrated into Hawkeye calibration software using C++ and Qt framework, improving the color accuracy by over 50%.",
      "Enhanced Hawkeye's web UI using JavaScript to add dynamic control sliders for real-time RGB adjustments, streamlined the calibration process and significantly improved user experience. (client commented “intuitive and convenient to use”)",
    ],
  },
  {
    title: "Software Developer (Data Collection Platform)",
    company_name: "Ford Company of Canada Limited",
    icon: ford,
    iconBg: "#E6DEDD",
    date: "Jan 2024 ~ Apr 2024",
    points: [
      "Maintained codebase for FNV4 Data Collection Platform using C++, improved integration with real-time signal processing systems.",
      "Developed a multi-threaded data ingestion service that optimized data flow from vehicle sensors, reduced processing latency by 23%.",
      "Built a robust testing framework using Google Test and Google Mock, covering over 90% of the platform’s core modules and ensuring stability during the transition from FNV3 to FNV4 architectures.",
    ],
  },
  {
    title: "Software Engineer (Unreal Engine Tool Dev)",
    company_name: "Behaviour Interactive",
    icon: bhvr,
    iconBg: "#383E56",
    date: "May 2023 ~ Aug 2023",
    points: [
      "Developed Unreal Engine components using C++ for real-time, in-editor actor collision detection with customizable visual indicators, allowing designers to visualize collisions without launching the game, streamlined level design and boosted team productivity by ~40%.",
      "Optimized a custom Unreal Engine plugin (Tile Editor) to automate the conversion of over 700 game scene tiles from blueprints to levels, supporting advanced foliage editing, saving over 100 hours of manual work and boosting design team efficiency by ~30%.",
    ],
  },
  {
    title: "Instructional Support Assistant",
    company_name: "University of Waterloo",
    icon: uw,
    iconBg: "#E6DEDD",
    date: "Aug 2022 ~ Dec 2022",
    points: [
      "Performed UI and API quality assurance tests for the Android SES application, identifying and reporting bugs for timely resolution.",
      "Constructed C++ configuration scripts for the auto-grading system (Lint R) to automated assignment assessments and feedback.",
      'Conducted weekly office hours, tutorials, and pre-exam review sessions. (Praised by students as "encouraging and supportive.")',
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];


import CplusplusOriginal from "react-devicons/cplusplus/original";
import COriginal from "react-devicons/c/original";
import CsharpOriginal from "react-devicons/csharp/original";
import PythonOriginalWordmark from "react-devicons/python/original-wordmark";
import KotlinOriginalWordmark from "react-devicons/kotlin/original-wordmark";
import JavaOriginalWordmark from "react-devicons/java/original-wordmark";
import TypescriptOriginal from "react-devicons/typescript/original";
import JavascriptOriginal from "react-devicons/javascript/original";
import MarkdownOriginal from "react-devicons/markdown/original";
import Html5Original from "react-devicons/html5/original";
import Css3Original from "react-devicons/css3/original";
import ReactOriginalWordmark from "react-devicons/react/original-wordmark";
import NodejsOriginalWordmark from "react-devicons/nodejs/original-wordmark";
import NextjsOriginal from "react-devicons/nextjs/original";
import BootstrapOriginal from "react-devicons/bootstrap/original";
import MaterialuiOriginal from "react-devicons/materialui/original";
import FoundationOriginal from "react-devicons/foundation/original";
import UnrealengineOriginal from "react-devicons/unrealengine/original";
import UnityOriginal from "react-devicons/unity/original";
import MatlabOriginal from "react-devicons/matlab/original";
import AndroidstudioOriginal from "react-devicons/androidstudio/original";
import GitOriginal from "react-devicons/git/original";
import GithubOriginal from "react-devicons/github/original";
import JiraOriginal from "react-devicons/jira/original";
import VscodeOriginal from "react-devicons/vscode/original";
import VisualstudioPlain from "react-devicons/visualstudio/plain";
import DockerOriginal from "react-devicons/docker/original";
import LatexOriginal from "react-devicons/latex/original";
import FigmaOriginal from "react-devicons/figma/original";
import CanvaOriginal from "react-devicons/canva/original";

export const skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", icon: CplusplusOriginal },
      { name: "C", icon: COriginal },
      { name: "C#", icon: CsharpOriginal },
      { name: "Python", icon: PythonOriginalWordmark },
      { name: "Kotlin", icon: KotlinOriginalWordmark },
      { name: "Java", icon: JavaOriginalWordmark },
      { name: "TypeScript", icon: TypescriptOriginal },
      { name: "JavaScript", icon: JavascriptOriginal },
      { name: "Markdown", icon: MarkdownOriginal },
      { name: "HTML", icon: Html5Original },
      { name: "CSS", icon: Css3Original },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: ReactOriginalWordmark },
      { name: "Node.js", icon: NodejsOriginalWordmark },
      { name: "Next.js", icon: NextjsOriginal },
      { name: "Bootstrap", icon: BootstrapOriginal },
      { name: "Material UI", icon: MaterialuiOriginal },
      { name: "Foundation", icon: FoundationOriginal },
    ],
  },
  {
    category: "Dev & Design Tools & Platforms",
    skills: [
      { name: "Unreal Engine", icon: UnrealengineOriginal },
      { name: "Unity", icon: UnityOriginal },
      { name: "Matlab", icon: MatlabOriginal },
      { name: "Android Studio", icon: AndroidstudioOriginal },
      { name: "Git", icon: GitOriginal },
      { name: "GitHub", icon: GithubOriginal },
      { name: "Jira", icon: JiraOriginal },
      { name: "VS Code", icon: VscodeOriginal },
      { name: "Visual Studio", icon: VisualstudioPlain },
      { name: "Docker", icon: DockerOriginal },
      { name: "LaTeX", icon: LatexOriginal },
      { name: "Figma", icon: FigmaOriginal },
      { name: "Canva", icon: CanvaOriginal },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects };
