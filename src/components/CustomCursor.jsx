
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const mouseOverHandler = (event) => {
      const targetElement = event.target;
      const isClickable = 
        targetElement.tagName.toLowerCase() === 'button' ||
        targetElement.tagName.toLowerCase() === 'a' ||
        targetElement.closest('a') ||
        targetElement.closest('button') ||
        targetElement.classList.contains('clickable') ||
        window.getComputedStyle(targetElement).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseover', mouseOverHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseover', mouseOverHandler);
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor bg-primary"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px) scale(${isPointer ? 1.5 : 1})`,
          opacity: isPointer ? 0.7 : 0.3
        }}
      />
      <div 
        className="custom-cursor-dot bg-white"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          opacity: isPointer ? 0 : 1
        }}
      />
    </>
  );
};

export default CustomCursor;
