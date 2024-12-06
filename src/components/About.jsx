import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { aboutPhoto } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const markdownContent = ` 
👋 **Hi there!** My name is **Sirius Hou**, and I'm a **4th-year Computer Science** student at the **University of
Waterloo**, specializing in **Artificial Intelligence**.  

&nbsp;  

💡 My journey in Computer Science began with a curiosity to understand how technology shapes our world. Over time,
this curiosity evolved into a passion for creating impactful tools and systems that enhance human experiences. From 
designing intuitive user interfaces to exploring the frontiers of VR and AI, I find joy in bridging the gap between 
imagination and reality.  

&nbsp;  

💻 **Fields of Interest**: Full-stack development, Human-Computer Interaction, VR/AR innovations, and leveraging AI 
to solve real-world challenges.

&nbsp;

🚀 **Hobbies**: Gaming, Traveling, Photography, and exploring innovations in AI and emerging technologies.
`;


const awardsMarkdown = `
🏆 **Awards**:

🎉 **University of Waterloo** Computer Science International Student **Upper-Year Scholarship**, 2023

🎉 **University of Waterloo President's Scholarship**, 2021

🎉 **Canadian Computer Competition** (CCC): **TOP 25%**, senior division, 2020 & TOP 25%, junior division, 2019

🎉 **Design Award** & **Amaze Award** & **Create Award**, **VEX EDR Robotics Championships**, 2019 & 2020

`;

// const markdownContent1 = `
// 👋 **Hi there!** My name is **Sirius Hou**, and I am deeply fascinated by the limitless potential of technology. As a **4th-year Computer Science** student at the **University of Waterloo**, specializing in **Artificial Intelligence**, I am driven by the challenge of solving complex problems through innovative solutions.

// &nbsp;

// 💡 My journey in Computer Science began with a curiosity to understand how technology shapes our world. Over time, this curiosity evolved into a passion for creating impactful tools and systems that enhance human experiences. From designing intuitive user interfaces to exploring the frontiers of VR and AI, I find joy in bridging the gap between imagination and reality.

// &nbsp;

// 💻 **What I Love About CS**: The versatility and creativity of programming inspire me to constantly learn and grow. Whether it’s debugging intricate algorithms or collaborating on large-scale projects, I thrive in the process of turning abstract ideas into tangible results.

// &nbsp;

// 💬 **Fields of interest**: Developing cutting-edge applications, building seamless user experiences, and leveraging AI to solve real-world challenges.

// ⚡ **Hobbies**: Gaming, Traveling, Cycling, and exploring emerging tech trends.
// `;



const About = () => {
  return (
    <div className="flex flex-col items-start justify-start">
  {/* Header Section */}
  <motion.div
    variants={textVariant()}
    className="w-full px-4 sm:px-8"
  >
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>About Me.</h2>
  </motion.div>

  {/* Content Section */}
  <div className="flex flex-col-reverse md:flex-row items-start justify-start w-full">
    {/* Left Section: Text */}
    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className="w-full md:w-2/3 px-4 sm:px-8 mt-4 md:mt-0"
    >
      <div className="text-secondary text-[17px] max-w-3xl leading-[1.7]">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </motion.div>

    {/* Right Section: Photo */}
    <motion.div
      variants={fadeIn("left", "spring", 0.2, 0.75)}
      className="w-full md:w-1/3 flex items-start justify-center relative mt-8 md:mt-0 min-h-[440px]"
    >
      <div className="relative max-w-[300px] flex justify-center items-center h-full">
        {/* Photo Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+20px)] h-[calc(100%+20px)] bg-[#276a8c] rounded-[15px] blur-[10px] z-0"></div>
    
        {/* Actual Photo */}
        <img
          src={aboutPhoto}
          alt="Sirius Hou"
          className="relative z-10 w-full rounded-[15px]"
        />
      </div>
    </motion.div>
  </div>
</div>

  );
};

export default SectionWrapper(About, "about");