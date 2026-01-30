import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "../util/Reveal";
import { styles } from "../../styles";
import { useNavigate } from "react-router-dom";
import natureCover from "../../assets/photos/sectionCoverPhotos/nature.png";
import animalsCover from "../../assets/photos/sectionCoverPhotos/animals.jpg";

const sectionCoverPhotos = [
  { name: "Nature", imgSrc: natureCover },
  { name: "Animals", imgSrc: animalsCover },
];

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
            imgSrc={photo.imgSrc}
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
            <h4>{heading}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default PhotoSections;
