import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Type from "./Type";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Fixed Top Text Section */}
      <div className="absolute inset-0 top-[96px] h-[calc(50vh-48px)] w-full z-10 flex items-start justify-start gap-6">
        <div className="w-full max-w-7xl mx-auto flex flex-row items-start justify-start px-4 sm:px-4 lg:px-10">
          {/* Meteor Component */}
          <div className="flex flex-col justify-start items-center mt-0">
            <div className="w-5 h-5 rounded-full bg-[#53C1DE]" />
            <div
              className="w-1 sm:h-96 h-48"
              style={{
                background:
                  "linear-gradient(180deg, rgba(83, 193, 222, 1) 0%, rgba(83, 193, 222, 0) 100%)",
              }}
            />
          </div>

          {/* Text Content */}
          <div className="ml-4 sm:ml-6">
            <h1 className={`${styles.heroSubText} text-white`}>
              Hello, it's me <br />
            </h1>
            <h1
              className={`bg-gradient-to-br from-[#3465eb] to-[#e64555] bg-clip-text text-transparent font-protest text-[60px] sm:text-[80px] lg:text-[100px]`}
            >
              Sirius Hou
            </h1>

            <div className={`${styles.heroSubText} text-white`}>
              And I'm a{" "}
            </div>
            <span className="text-2xl font-extrabold mt-2 text-[#53C1DE] custom-typewriter">
              <Type />
            </span>

            <p className="mt-4 text-white-100 text-lg leading-7">
              University of Waterloo Undergrad student <br />
              4th-Year Computer Science | AI specialization <br />
              Web & App Developer
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-5">
              <a
                href="https://github.com/Sirius-Hou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition duration-300 transform hover:bg-[#53C1DE] hover:scale-105"
              >
                <FaGithub className="text-gray-800 text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sirius-hou-a40b21239/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition duration-300 transform hover:bg-[#53C1DE] hover:scale-105"
              >
                <FaLinkedin className="text-gray-800 text-2xl" />
              </a>
              <a
                href="mailto:siriushyc@gmail.com?subject=Glad%20to%20Connect!&body=Hi%20Sirius,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20recently%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%0D%0A%0D%0AIf%20you%20have%20some%20time,%20I%20would%20like%20to%20ask%20you%20a%20few%20questions%20about%20your%20work%20and%20experience.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition duration-300 transform hover:bg-[#53C1DE] hover:scale-105"
              >
                <MdEmail className="text-gray-800 text-2xl" />
              </a>
            </div>

            {/* View Resume Button */}
            <div className="relative mt-5">
              <a
                href="/resume"
                className="inline-block px-6 py-2 text-lg font-bold text-white bg-gradient-to-r from-[#2AA9DF] to-[#AE0CA7] rounded-full transition transform hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Full-Screen Background for 3D Computer Model */}
      <div className="absolute inset-0 w-full h-full">
        <ComputersCanvas />
      </div>

      {/* Animated Arrow */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;