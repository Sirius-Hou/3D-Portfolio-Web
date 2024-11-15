import { useAnimation, useInView, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import Reveal from "../util/Reveal";

const Project = ({
  modalContent,
  source_code_link,
  description,
  image,
  name,
  tags,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"
        >
          {/* Backlight effect using blurred background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(10px) brightness(0.7)",
            }}
          />

          {/* Image */}
          <img
            src={image}
            alt={`An image of the ${name} project.`}
            style={{
              width: hovered ? "90%" : "88%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2  transition-all rounded"
          />
        </div>

        {/* GitHub Logo and the line */}
        <div className="mt-6">
        <Reveal width="w-full">
          <div className="flex items-center gap-2 w-full">
            <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%_-_150px)]">
              {name}
            </h4>
            
            {/* Pointing Line */}
            <div className="w-full h-[1px] bg-zinc-600" />

            {/* GitHub Logo */}
            <Link to={source_code_link} target="_blank" rel="nofollow">
              <AiFillGithub className="text-4xl text-zinc-300 hover:text-indigo-300 transition-colors" />
            </Link>
          </div>
        </Reveal>

          {/* ORIGINAL TAG STYLES */}
          {/* <Reveal>
            <div className="flex flex-wrap gap-4 text-sm text-indigo-300 my-2">
              {tags.map((tag) => `#${tag.name}`).join(" ")}
            </div>
          </Reveal> */}

          {/* MY TAG STYLES */}
          <Reveal>
            <div className="mt-2 mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[16px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
            </div>
          </Reveal>

          {/* Project Description */}
          <Reveal>
            <p className="text-zinc-300 leading-relaxed">
              {description}{" "}
              <span
                className="inline-block text-sm text-indigo-300 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
        
      {/* Modal */}
      <ProjectModal
        modalContent={modalContent}
        projectLink={source_code_link}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={image}
        title={name}
        // tech={tags.map((tag) => tag.name)}
        tech={tags}
      />
    </>
  );
};

export default Project;
