import React, { useState, useRef, useEffect } from "react";

const RunningText = () => {
  const [isRunning, setIsRunning] = useState(true);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  const text =
    "YVOO announces EUR 6 million financing round: The round is led by Capmont, while existing investors such as Earlybird-X participating again. * ";

  useEffect(() => {
    const animate = () => {
      if (!isRunning) {
        cancelAnimationFrame(animationRef.current);
        return;
      }

      positionRef.current -= 0.6;

      if (positionRef.current <= -textRef.current.scrollWidth) {
        positionRef.current = containerRef.current.offsetWidth;
      }

      textRef.current.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [isRunning]);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="z-[999] left-[0] w-full fixed">
      <div
        ref={containerRef}
        className="bg-[#06D7F9] text-black font-[500] md:text-[16px] text-[14px] md:leading-[20px] leading-[18px] md:p-[20px_48px] p-[12px]"
        style={{
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <div
          ref={textRef}
          style={{
            display: "inline-block",
            position: "relative",
            whiteSpace: "nowrap",
          }}
        >
          {text.repeat(3)}
        </div>
        <button 
          onClick={toggleRunning}
          style={{
            position: 'absolute',
            right: '0px',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '20px 30px',
            backgroundColor: '#06D7F9',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            zIndex: 2,
            minWidth: '84px'
          }}
        >
          {isRunning ? <>&#10074;&#10074;</> : '▶'}
        </button>
      </div>
    </div>
  );
};

export default RunningText;
