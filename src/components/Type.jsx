import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Game Programmer",
          "Full-Stack Developer",
          "VR Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        // wrapperClassName: "custom-typewriter",
        wrapperClassName: "bg-gradient-to-br from-[#3465eb] to-[#e64555] bg-clip-text text-transparent",
      }}
    />
  );
}

export default Type;
