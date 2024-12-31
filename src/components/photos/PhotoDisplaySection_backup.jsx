import { useParams } from "react-router-dom";
import { styles } from "../../styles";
import Reveal from "../util/Reveal";
import { photos } from "./index";

const PhotoDisplaySection = () => {
  const { section } = useParams();
  const sectionIndex = ["nature", "animals", "city", "travel"].indexOf(section.toLowerCase());

  // Fallback if section index is invalid
  if (sectionIndex === -1 || !photos[sectionIndex]) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white">
        <h2 className={`${styles.sectionHeadText} text-center capitalize`}>Invalid Section</h2>
        <p className={`${styles.sectionSubText} text-center`}>
          The section "{section}" does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-transparent text-white pt-20 sm:pt-10 md:justify-start md:pt-32">
      {/* Section Title */}
      <Reveal width="w-fit">
        <h2 className={`${styles.sectionHeadText} text-center capitalize`}>{section}</h2>
      </Reveal>
      <Reveal width="w-fit">
        <p className={`${styles.sectionSubText} text-center mb-8`}>
          A collection of my favorite {section} moments.
        </p>
      </Reveal>

      {/* Responsive Photo Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 w-full max-w-6xl mx-auto px-4 sm:px-8">
        {photos[sectionIndex].map((photo, index) => (
          <div
            key={index}
            className="mb-4 overflow-hidden cursor-pointer relative group"
          >
            <img
              src={photo.url}
              alt={`Photo ${index}`}
              className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoDisplaySection;
