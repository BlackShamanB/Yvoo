import React, { useEffect, useState } from 'react';

const LoadOnLoad = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // Запускаем анимацию сразу после монтирования компонента
      setIsLoaded(true);
    }, []);

    return (
      <div className={`load-on-load ${isLoaded ? 'fade-in-up' : ''}`}>
        {children}
      </div>
    );
  };

  export default LoadOnLoad;