import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import './TypingEffect.css'; // Подключаем файл стилей
const TypingEffect = ({ text, speed, delay }) => {
  const [display, setDisplay] = useState(false);
  const [displayText, setDisplayText] = useState([]);

  const [ref, inView] = useInView({
    triggerOnce: true, // Чтобы анимация сработала только один раз
  });

  useEffect(() => {
    if (inView) {
      setDisplay(true);
    }
  }, [inView]);

  useEffect(() => {
    if (display) {
      const timeout = [];
      for (let i = 0; i < text.length; i++) {
        timeout.push(
          setTimeout(() => {
            setDisplayText((prev) => [...prev, text.charAt(prev.length)]);
          }, speed * i + delay * 1000)
        );
      }
      return () => {
        timeout.forEach((t) => clearTimeout(t));
      };
    }
  }, [text, speed, display, delay]);

  return (
    <div className="typing-effect" ref={ref}>
      {displayText.map((char, index) => (
        <span key={index} className="typing-char">
          {char}
        </span>
      ))}
    </div>
  );
};

export default TypingEffect;
