import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
        <h3>
        Built with ❤️, <span className="text-cyan-400">React.js</span> and <span className="text-teal-400">Tailwind CSS</span> by Sirius Hou
        </h3>
        </div>

        {/* Center Section */}
        <div className="mb-4 md:mb-0 text-center">
          <h3>Copyright © {year} SH</h3>
        </div>

        {/* Right Section (Social Media Icons) */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="https://github.com/Sirius-Hou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:scale-110 transition-transform"
          >
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sirius-hou-a40b21239/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:scale-110 transition-transform"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:siriushyc@gmail.com?subject=Glad%20to%20Connect!&body=Hi%20Sirius,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20recently%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%0D%0A%0D%0AIf%20you%20have%20some%20time,%20I%20would%20like%20to%20ask%20you%20a%20few%20questions%20about%20your%20work%20and%20experience.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%20:)%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:scale-110 transition-transform"
          >
            <MdEmail />
          </a>
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:scale-110 transition-transform"
          >
            <AiFillInstagram />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
