import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const MagnifyOnScroll = (imgSrc) => {
  const [ref, inView, entry] = useInView({ rootMargin: "0px 0px -200px 0px" });

  const imageRef = useRef(null);
  const imageContainerRef = useRef(null)

  const [visibilityPercentage, setVisibilityPercentage] = useState(0);

  const checkVisibility = () => {
    if (imageContainerRef.current) {
      const { top, bottom, height } = imageContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      console.log(bottom <= windowHeight)
      if (top >= 0 && bottom <= windowHeight) {
        setVisibilityPercentage(100);
      }
      else if (top < windowHeight && bottom > 0) {
        console.log('tut')
        const visiblePercentage = (windowHeight - top) / height * 100;
        console.log(visiblePercentage);
        setVisibilityPercentage(visiblePercentage);
      }
      else {
        setVisibilityPercentage(0);
      }
    }
  };
  const handleScroll = () => {
    checkVisibility();
    if (inView) {
      const distanceFromTop = imageContainerRef.current.getBoundingClientRect().top;
      console.log(visibilityPercentage)
      const scale = visibilityPercentage / 100 > 1 ? 1 : visibilityPercentage / 100; // Изменение масштаба в зависимости от расстояния до верха
      imageRef.current.style.scale = `${scale}`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView, visibilityPercentage]);

  return (
    <span ref={ref} className={imgSrc.classes}>
      <div ref={imageContainerRef}>
        <img ref={imageRef}
          className={imgSrc.imgClasses}
          src={imgSrc.src}
          alt={imgSrc.alt}
          style={{ transition: "transform 0.5s ease" }}
        />
      </div>
    </span>
  );
};

export default MagnifyOnScroll;
