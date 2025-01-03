import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center items-center cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <button className="absolute top-4 md:top-6 text-4xl right-4">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl md:max-w-4xl h-fit rounded-lg overflow-hidden bg-zinc-900 shadow-lg cursor-auto"
      >
        <img
          className="w-full"
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2">{title}</h4>
          {/* ORIGINAL */}
          {/* <div className={`flex flex-wrap gap-2 text-sm text-indigo-300`}>
            {tech.join(" - ")}
          </div> */}

          {/* MY TAGS WITH COLOR */}
          <div className="flex flex-wrap gap-2 text-sm mt-2 mb-2">
            {tech.map((tag) => (
              <p key={`${tag.name}`} className={`text-[16px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Modal Content */}
          <div className="space-y-4 my-6 leading-relaxed text-sm sm:text-md lg:text-lg text-zinc-300">
            <>
              {modalContent.map((content, index) => (
                <p key={index}>
                  👉 {content}
                </p>
              ))}
            </>
          </div>

          <div>
            <p className="font-bold mb-2 text-xl">
              Project Links<span className="text-indigo-500">.</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1"
                href={code}
              >
                <AiFillGithub className="text-2xl text-zinc-300 hover:text-indigo-300 transition-colors" /> Source Code
              </a>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1"
                href={projectLink}
              >
                <AiOutlineExport className="text-2xl text-zinc-300 hover:text-indigo-300 transition-colors" /> Project Details
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return null;

  return ReactDOM.createPortal(content, document.getElementById("root"));
};