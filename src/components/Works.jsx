import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, onClick }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer hover:shadow-lg"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation(); // Prevent click from propagating to the card's onClick
                window.open("source_code_link", "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [projectPageState, setProjectPageState] = useState("gallery");
  const [selectedProject, setSelectedProject] = useState(null);
  const [key, setKey] = useState(0); // Unique key for gallery container

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setProjectPageState("details");
  };

  const handleSectionClick = () => {
    // Reset state back to gallery mode and force re-render
    setProjectPageState("gallery");
    setSelectedProject(null);
    setKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  return (
    <div onClick={projectPageState === "details" ? handleSectionClick : null}>
      {projectPageState === "gallery" ? (
        <div key={key}>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>My work</p>
            <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Following projects showcase my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos. They reflect my
              ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </motion.p>
          </div>

          <div className="mt-20 flex flex-wrap gap-7">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
                onClick={() => handleCardClick(project)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex" onClick={handleSectionClick}>
          {/* Left Section */}
          <div className="w-2/3 p-10 bg-tertiary">
            <h1 className="text-white text-[32px] font-bold mb-5">
              {selectedProject.name}
            </h1>
            <p className="text-secondary text-[18px]">
              {selectedProject.description}
            </p>
          </div>

          {/* Right Section */}
          <div className="w-1/3 flex items-center justify-center bg-primary">
            <motion.div
              layoutId={selectedProject.name}
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
              <img
                src={selectedProject.image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Works, "");
