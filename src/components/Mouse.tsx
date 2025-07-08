// components/Mouse.tsx
import React, { useEffect, useRef } from "react";
import "./Mouse.css";

const Mouse: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  // Store target and current positions
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetX.current = e.clientX;
      targetY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Move current position slightly towards target
      currentX.current += (targetX.current - currentX.current) * 0.09;
      currentY.current += (targetY.current - currentY.current) * 0.09;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX.current}px`;
        cursorRef.current.style.top = `${currentY.current}px`;
      }

      requestAnimationFrame(animate);
    };

    animate(); // start animation loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="blur-cursor" />;
};

export default Mouse;
