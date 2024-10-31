import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo/sh-high-resolution-logo-grayscale.svg";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { HiOutlinePhoto } from "react-icons/hi2";
import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons = {
    Home: <AiOutlineHome className="mr-2" />,
    About: <AiOutlineUser className="mr-2" />,
    Work: <MdOutlineWorkOutline className="mr-2" />,
    Projects: <AiOutlineFundProjectionScreen className="mr-2" />,
    Contact: <RiContactsLine className="mr-2" />,
    Resume: <CgFileDocument className="mr-2" />,
    Photography: <HiOutlinePhoto className="mr-2" />
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Sirius&nbsp;
            <span className="sm:block hidden"> | Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                hovered === nav.title ? "text-react-blue" : "text-secondary"
              } hover:text-react-blue text-[18px] font-medium cursor-pointer relative`}
              onMouseEnter={() => setHovered(nav.title)}
              onMouseLeave={() => setHovered(null)}
            >
              <a href={`#${nav.id}`} className="flex items-center">
                {React.cloneElement(icons[nav.title], {
                  className: `${hovered === nav.title ? "text-react-blue" : "text-secondary"} mr-2`
                })}
                {nav.title}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-react-blue transition-all duration-300 ${
                    hovered === nav.title ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    hovered === nav.title ? "text-react-blue" : "text-secondary"
                  }`}
                  onMouseEnter={() => setHovered(nav.title)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`} className="flex items-center">
                    {React.cloneElement(icons[nav.title], {
                      className: `${hovered === nav.title ? "text-react-blue" : "text-secondary"} mr-2`
                    })}
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
