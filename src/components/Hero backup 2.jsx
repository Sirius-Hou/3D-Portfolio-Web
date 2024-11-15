import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Type from "./Type"; // Ensure Type component for typing animation is imported
import profilePic from "../assets/sirius.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-between">
      {/* Top section with text and profile image */}
      <div className={`absolute inset-0 flex flex-row items-start justify-between w-full max-w-7xl mx-auto ${styles.paddingX} pt-36 px-6 gap-5 z-0`}>
        {/* Left Section - Text and Buttons */}
        <div className="flex flex-col flex-1 justify-start items-start">
          <div className="flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#53C1DE]" />
              <div
                className="w-1 sm:h-80 h-40"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(83, 193, 222, 1) 0%, rgba(83, 193, 222, 0) 100%)",
                }}
              />
            </div>

            <div>
              <h1 className="text-white text-4xl font-bold">
                Hello, it's me <br />
                <span className="text-6xl text-[#53C1DE]">Sirius Hou</span>
              </h1>

              <div className="text-2xl font-extrabold text-[#53C1DE] mt-2">
                And I'm a <span className="custom-typewriter"><Type /></span>
              </div>

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
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition transform hover:bg-[#53C1DE] hover:scale-105"
                >
                  <FaGithub className="text-gray-800 text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sirius-hou-a40b21239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition transform hover:bg-[#53C1DE] hover:scale-105"
                >
                  <FaLinkedin className="text-gray-800 text-2xl" />
                </a>
                <a
                  href="mailto:siriushyc@gmail.com?subject=Glad%20to%20Connect!&body=Hi%20Sirius,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20recently%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%0D%0A%0D%0AIf%20you%20have%20some%20time,%20I%20would%20like%20to%20ask%20you%20a%20few%20questions%20about%20your%20work%20and%20experience.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition transform hover:bg-[#53C1DE] hover:scale-105"
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

        {/* Right Section - Profile Image */}
        <div className="flex flex-1 justify-center items-center relative">
          {/* Gradient Background Behind Image */}
          <div className="absolute w-[80%] h-[80%] top-0 left-0 right-0 bottom-0 rounded-full bg-gradient-to-b from-[#DC00D3] to-[#0CFAF5] blur-3xl -z-10" />

          {/* Profile Image */}
          <img
            src={profilePic}
            alt="Sirius Hou"
            className="w-3/4 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* 3D Computer Model - Centered Below Main Content */}
      <div className="flex-grow flex justify-center items-end mb-10">
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