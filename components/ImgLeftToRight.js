import React, { useRef, useEffect, useState } from "react";

const MagnifyOnScroll = (imgSrc) => {
  const ref = useRef(null);
  const imageRef = useRef(null);

  const [visibilityPercentage, setVisibilityPercentage] = useState(0);

  const checkVisibility = () => {
    if (imageRef.current) {
      const { top, bottom, height } = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top >= 0 && bottom <= windowHeight / 10) {
        setVisibilityPercentage(1000);
      } else if (top < windowHeight && bottom > 0) {
        const visiblePercentage = ((windowHeight - top) / height) * 200;
        setVisibilityPercentage(visiblePercentage);
      } else {
        setVisibilityPercentage(100);
      }
    }
  };
  const handleScroll = () => {
    checkVisibility();
    if (ref) {
      ref.current.style.width = `${visibilityPercentage}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibilityPercentage]);

  return (
    <span
      ref={ref}
      className={imgSrc.classesContainer}
      data-scroll
      data-scroll-speed={imgSrc["data-scroll-speed"]}
    >
      <img
        ref={imageRef}
        className={imgSrc.classesImg}
        src={imgSrc.src}
        alt={imgSrc.alt}
      />
    </span>
  );
};

export default MagnifyOnScroll;
