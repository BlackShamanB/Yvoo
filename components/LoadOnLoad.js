import React, { useEffect, useState } from 'react';

const LoadOnLoad = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      const handleLoad = () => {
        setIsLoaded(true);
      };
  
      window.addEventListener('load', handleLoad);
  
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);
  
    return (
      <div className={isLoaded ? 'fade-in-up' : ''}>
        {isLoaded && children}
      </div>
    );
  };
  
  export default LoadOnLoad;