import React, { useEffect, useRef, useState } from 'react';

const LoadOnLoad = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect(); // Отключаем наблюдатель после первого появления
        }
      },
      {
        threshold: 0.1, // Порог видимости, при котором срабатывает наблюдатель
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`load-on-load ${isLoaded ? 'fade-in-up' : ''}`}>
      {children}
    </div>
  );
};

export default LoadOnLoad;
