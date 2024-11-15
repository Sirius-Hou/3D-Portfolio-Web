import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../constants"; // Correct import
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import React from "react";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  const [order, setOrder] = useState([...Array(projects.length).keys()]); // Dynamically set the order based on the number of projects

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop());
    setOrder(orderCopy);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <section className="overflow-hidden px-8 py-24 text-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="md:col-span-2">
            <h3 className="text-5xl font-black leading-[1.25] md:text-7xl">
              You don't know marketing
            </h3>
            <p className="mb-8 mt-4 text-lg text-slate-400">
              ...but we're going to help. We send out weekly break downs of
              exactly what's working and what's not for the largest companies in
              the world. It's free.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded border-transparent bg-slate-800 px-3 py-2 transition-colors focus:bg-slate-700 focus:outline-none"
              />
              <button className="whitespace-nowrap rounded bg-indigo-600 px-3 py-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Join newsletter
              </button>
            </form>
          </div>
          <div className="relative h-[450px] w-full md:w-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                imgUrl={project.image}
                name={project.name}
                tags={project.tags}
                handleShuffle={handleShuffle}
                position={order[index]}
                totalCards={projects.length}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Card = ({ handleShuffle, name, position, imgUrl, tags, totalCards }) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  // Calculate the angle and x position dynamically
  const angleStep = 3; // Adjust this value to control the angle difference between cards
  const xStep = 90 / (totalCards - 1); // Calculate the x position step based on the total number of cards

  const rotateZ = `${(position - Math.floor(totalCards / 2)) * angleStep}deg`;
  const x = `${(position - Math.floor(totalCards / 2)) * xStep}%`;
  const zIndex = totalCards - position; // Higher zIndex for cards closer to the front

  return (
    <motion.div
      style={{
        zIndex,
        rotate: rotateZ,
        x,
      }}
      initial={{ rotate: rotateZ, x }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[300px] w-[200px] md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[300px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md cursor-grab active:cursor-grabbing`}
    >
      <img
        src={imgUrl}
        alt={`Image of ${name}`}
        className="pointer-events-none mx-auto h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-lg border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">
        {name}
      </span>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Projects, "");