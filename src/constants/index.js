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
  CC3K,
  UWCS,
  VR,
  WLP4,
  YADA,
} from "../assets";

// export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "projects",
//     title: "Projects",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
//   {
//     id: "resume",
//     title: "Resume",
//   },
//   {
//     id: "photography",
//     title: "Photography",
//   },
// ];

export const navLinks = [
  { id: "home", title: "Home", path: "/" },
  { id: "about", title: "About", path: "/#about" },
  { id: "work", title: "Work", path: "/#work" },
  { id: "projects", title: "Projects", path: "/#projects" },
  { id: "contact", title: "Contact", path: "/#contact" },
  { id: "resume", title: "Resume", path: "/resume" },
  { id: "photography", title: "Photography", path: "/photography" }
];


const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Game Programmer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "VR Developer",
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
    name: "UW - Research Assistant (Around Ear Gestures for VR Locomotion)",
    description:
      "Designed and implemented a VR game utilizing around-ear gestures to enhance locomotion accessibility and interaction for users with lower-limb disabilities.",
    modalContent: [
      "Collaborated with Prof. Jian Zhao to design and implement a VR game in Unity with mazes and interactable objects to test around-ear bare-hand gestures for VR locomotion.",
      "Improved accessibility for seated and lower-limb disabled users.",
      "Programmed game mechanics and interaction logic in C#, enabling seamless simultaneous locomotion and object manipulation.",
      "Achieved a ~30% increase in task completion efficiency compared to traditional controller-based methods.",
    ],
    tags: [
      { name: "VR", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "C#", color: "pink-text-gradient" },
      { name: "Human-Computer Interaction", color: "orange-text-gradient" },
    ],
    image: VR,
    source_code_link: "https://github.com/",
    detail_page_link: "https://long-sandalwood-8c3.notion.site/UW-Research-Assistant-Around-Ear-Gestures-for-VR-Locomotion-1598d8ce55f48022ac43f51e5ae68838",
  },
  {
    name: "Collaborative Whiteboard Android App (YADA)",
    description:
      "Used Kotlin and Jetpack Compose in Android Studio to design and build a responsive Android whiteboard App in a team of 4, supporting real-time, low-latency collaboration, allowing multiple users to draw and interact on the whiteboard simultaneously.",
    modalContent: [
      "Used Kotlin and Jetpack Compose in Android Studio to design and build a responsive Android whiteboard App in a team of 4.",
      "Supported real-time, low-latency collaboration, allowing multiple users to draw and interact on the whiteboard simultaneously.",
      "Implemented dynamic drawing features including pen, eraser, and shape tools with undo/redo functionality and real-time rendering.",
    ],
    tags: [
      { name: "Android Studio", color: "blue-text-gradient" },
      { name: "Kotlin", color: "green-text-gradient" },
      { name: "Jetpack Compose", color: "pink-text-gradient" },
    ],
    image: YADA,
    source_code_link: "https://git.uwaterloo.ca/s26nadee/cs346-project.git",
    detail_page_link: "https://long-sandalwood-8c3.notion.site/Collaborative-Whiteboard-Android-App-YADA-1598d8ce55f480a3a64fe1c92abfdb31",
  },
  {
    name: "The Game of ChamberCrawler3000+ (CC3K+)",
    description:
      "Enhanced gameplay interaction by implementing Observer and Decorator Design Patterns, adding key features such as NPC combat, potion usage, merchant trading, and prop equipping.",
    modalContent: [
      "Built the game in C++ with OOP, leveraged smart pointers and STL for efficient memory management and dynamic gameplay logic.",
      "Enhanced gameplay interaction by implementing Observer and Decorator Design Patterns, adding key features such as NPC combat, potion usage, merchant trading, and prop equipping.",
      "Elevated the gaming and visual experience by implementing a series of 'cheat codes' via C++ macros and a colored text display UI.",
    ],
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "Object-Oriented Programming", color: "green-text-gradient" },
      { name: "Observer & Decorator Design Pattern", color: "pink-text-gradient" },
    ],
    image: CC3K,
    source_code_link: "https://github.com/Sirius-Hou/CC3K",
    detail_page_link: "",
  },
  {
    name: "UW Course Scheduler (UWCS)",
    description:
      "Developed a smart scheduling agent for UW students using Python, leveraging Selenium and Requests to extract real-time class data and BeautifulSoup for analysis; Adopted by 20+ users with 50+ successfully generated schedules.",
    modalContent: [
      "Developed a smart scheduling agent for UW students using Python.",
      "Leveraged Selenium and Requests to extract real-time class data and BeautifulSoup for analysis.",
      "Adopted by 20+ users with 50+ successfully generated schedules.",
      "Combined a conflict-free scheduling algorithm with OpenAI GPT-3.5 API integration for personalized schedule generation.",
      "Supported real-time editing and GUI calendar display, significantly improving user experience and simplifying course selection.",
    ],
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Selenium", color: "green-text-gradient" },
      { name: "Requests", color: "orange-text-gradient" },
      { name: "OpenAI API", color: "pink-text-gradient" },
    ],
    image: UWCS,
    source_code_link: "https://github.com/",
    detail_page_link: "",
  },
  {
    name: "WLP4 (Simplified C Language) Compiler Project",
    description:
      "Programmed a full-featured compiler for WLP4 using C++ and a simplified Maximal Munch algorithm for lexical analysis.",
    modalContent: [
      "Programmed a full-featured compiler for WLP4 using C++ and a simplified Maximal Munch algorithm for lexical analysis.",
      "Implemented advanced features such as nested procedures and closures while conducting context-sensitive semantic analysis.",
      "Enhanced runtime performance via in-line procedure substitution and constant folder and propagation optimizations.",
    ],
    tags: [
      { name: "Compiler", color: "blue-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
    ],
    image: WLP4,
    source_code_link: "https://github.com/",
    detail_page_link: "",
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
import ThreejsOriginal from "react-devicons/threejs/original";
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
      { name: "Three.js", icon: ThreejsOriginal  },

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
