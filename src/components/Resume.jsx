import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../assets/Resume - Sirius Hou.pdf";

const Resume = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iframeWidth = Math.min(dimensions.width * 0.9, 1100); // 90% of window width or max 1100px
  const iframeHeight = Math.min(dimensions.height * 0.8, 1200); // 80% of window height or max 1200px

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white pt-20 sm:pt-10">
      {/* PDF Viewer */}
      <div className="mb-8 bg-black/30 rounded-md p-2 shadow-lg">
        <iframe
          src={pdf}
          width={iframeWidth}
          height={iframeHeight}
          style={{
            border: "none",
          }}
          title="Resume"
          className="rounded-md"
        />
      </div>

      {/* Download Button */}
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-md transition-colors duration-300"
      >
        <AiOutlineDownload /> Download Resume
      </a>
    </div>
  );
};

export default Resume;
