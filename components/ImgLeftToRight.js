import React, { useRef, useEffect, useState } from "react";

const MagnifyOnScroll = (imgSrc) => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const visiblePercentage = Math.max(0, (entry.intersectionRatio - 0.25) / 0.75);
          const newWidth = visiblePercentage * 25; // Максимальная ширина 25%
          setWidth(newWidth);
        } else {
          setWidth(0);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={imgSrc.classesContainer}
      data-scroll
      data-scroll-speed={imgSrc["data-scroll-speed"]}
      style={{
        position: 'absolute',
        right: 0,
        width: `${width}%`,
        height: 'auto',
        overflow: 'hidden',
        transition: 'width 0.2s ease-out',
      }}
    >
      <img
        ref={imageRef}
        className={imgSrc.classesImg}
        src={imgSrc.src}
        alt={imgSrc.alt}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default MagnifyOnScroll;
