import React from "react";

const TechCard = ({ path, currentColor, title }) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center relative z-[-50] ${currentColor}   shadow-xl shadow-bg-gray-800 justify-center my-6 w-64 h-48 rounded-3xl bg-customColor overflow-hidden transition-transform duration-300 transform-gpu hover:scale-105 `}
    >
      <svg
        stroke="white"
        fill="white"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        height="5em"
        width="5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path}></path>
      </svg>
      <span className="font-bold text-2xl text-white">{title}</span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

export default TechCard;
