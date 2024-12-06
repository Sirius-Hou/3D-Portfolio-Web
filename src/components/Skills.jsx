import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { skills } from "../constants";

const SkillCard = ({ index, name, Icon }) => (
  <div className="hover:scale-105">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      className="flex flex-col items-center p-2 rounded-lg bg-white bg-opacity-10 shadow-md transform transition duration-300 hover:scale-110 hover:bg-opacity-20 lg:p-3 lg:rounded-lg lg:scale-100 lg:gap-1"
    >
      {/* Reduced margin between icon and text */}
      <div className="bg-white rounded-full p-3 mb-1 transform transition duration-300 hover:scale-125 lg:p-3">
        <Icon size={40} className="lg:w-10 lg:h-10" />
      </div>
      <p className="text-white text-sm font-medium lg:text-lg">{name}</p>
    </motion.div>
  </div>
);


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I use for work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h2>
      </motion.div>

      {skills.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          // Apply staggered animation to each category independently
          variants={fadeIn("right", "spring", categoryIndex * 0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }} // Trigger animation only when each category comes into view
          className="mb-12"
        >
          <h3 className="text-lg md:text-2xl font-semibold text-left mb-4">{category.category}</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {category.skills.map((skill, index) => (
              <SkillCard key={skill.name} index={index} name={skill.name} Icon={skill.icon} />
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default SectionWrapper(Skills, "skills");
