import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 1,
  stiffness: 200,
  damping: 30, // Reduced vibration for a smoother transition
};

const ImageCarousel = ({ images, currentIndex, onClose }) => {
  const [imgIndex, setImgIndex] = useState(currentIndex);
  const dragX = useMotionValue(0);

  // Update imgIndex when currentIndex changes
  useEffect(() => {
    setImgIndex(currentIndex);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  const onPrev = () => {
    setImgIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const onNext = () => {
    setImgIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleBackdropClick = (e) => {
    // Close the carousel if the backdrop is clicked (not the image or controls)
    if (e.target.id === "carousel-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="carousel-backdrop"
      className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 pt-[80px]"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-[120px] right-5 text-white text-3xl z-[100]"
      >
        ✕
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl z-[100]"
      >
        <FiChevronLeft />
      </button>

      {/* Centered Displayed Image with Smooth Swapping */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex items-center cursor-grab active:cursor-grabbing z-10"
      >
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            className="flex justify-center items-center shrink-0 w-full"
          >
            <img
              src={image.url}
              alt={`Photo ${idx}`}
              className="max-w-[80vw] max-h-[70vh] rounded-lg object-contain shadow-lg"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl z-[100]"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
