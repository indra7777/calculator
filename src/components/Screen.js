import React, { useEffect, useRef } from "react";
import "./Screen.css";

const Screen = ({ value }) => {
  const screenRef = useRef(null);

  useEffect(() => {
    const screenElement = screenRef.current;
    const spanElement = screenElement.querySelector("span");

    // Adjust the font size based on the container size
    const adjustFontSize = () => {
      const fontSize = Math.min(
        70, // Set the maximum font size
        screenElement.offsetWidth / value.length // Calculate the font size based on the container width and text length
      );
      spanElement.style.fontSize = `${fontSize}px`;
    };

    // Call the adjustFontSize function initially and whenever the value prop changes
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => {
      window.removeEventListener("resize", adjustFontSize);
    };
  }, [value]);

  return (
    <div className="screen" ref={screenRef}>
      <span>{value}</span>
    </div>
  );
};

export default Screen;
