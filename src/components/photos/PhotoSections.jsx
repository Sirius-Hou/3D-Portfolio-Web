import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { sectionCoverPhotos } from "./index";
import Reveal from "../util/Reveal";
import { styles } from "../../styles";
import { useNavigate } from "react-router-dom";

const PhotoSections = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-transparent text-white pt-20 sm:pt-10 md:justify-start md:pt-32">
      <Reveal width="w-fit">
        <h2 className={`${styles.sectionHeadText} text-center`}>Photo Gallery</h2>
      </Reveal>
      <Reveal width="w-fit">
        <p className={`${styles.sectionSubText} text-center mb-8`}>
          A collection of my favorite moments.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
        {sectionCoverPhotos.map((photo, index) => (
          <Section
            key={index}
            heading={photo.name}
            description="Click to view more."
            imgSrc={photo.url}
          />
        ))}
      </div>
    </div>
  );
};

const Section = ({ heading, description, imgSrc }) => {
  const navigate = useNavigate();

  return (
    <Reveal width="w-full">
      <div
        onClick={() => navigate(`/photography/${heading.toLowerCase()}`)}
        className="w-full aspect-[16/10] bg-slate-300 overflow-hidden cursor-pointer group relative"
      >
        <div
          className="absolute inset-0 saturate-100 group-hover:scale-110 transition-all duration-500 z-10"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
          <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
          <div>
            <h4>
              {heading.split("").map((l, i) => (
                <ShiftLetter letter={l} key={i} />
              ))}
            </h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default PhotoSections;