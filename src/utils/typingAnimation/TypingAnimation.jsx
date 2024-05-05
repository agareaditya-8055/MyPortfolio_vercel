import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const TypingAnimation = ({ element, text }) => {
  useEffect(() => {
    new Typewriter(element.current, {
      strings: text,
      autoStart: true,
      loop: true,
    });
  }, []);

  return <span className="text-customColor text-6xl " ref={element}></span>;
};

export default TypingAnimation;
