import React, { useRef } from "react";
import TypingAnimation from "../../utils/typingAnimation/TypingAnimation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import photo from "../../assets/photo.jpg";

const Body = () => {
  const myNameRef = useRef(null);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <main className="min-h-[70vh] sm:min-h-[80vh]  flex justify-center items-center  w-full max-w-[1100px] mx-auto">
      <div
        className={`grid grid-cols-1  justify-items-center md:grid-cols-2 grid-flow-row-reverse gap-5 sm:mt-36 md:mt-0 mt-16 ${
          isDarkMode && "text-textColor"
        }`}
      >
        <div className="flex flex-col text-[1.67rem] sm:text-[2rem] justify-center items-start p-10 ">
          <div className="space-y-4 ">
            <h2 className="text-5xl mb-4">Hey,</h2>{" "}
            <span className="text-2xl">
              {" "}
              My name is{" "}
              <TypingAnimation element={myNameRef} text={["Aditya"]} />
            </span>
            <p className=" leading-[3rem]">
              <span className="border-b-2 border-purple-700 font-bold text-customColor ">
                Turning passion into proficiency,
              </span>
              {""}
              {"  "}I am a self-taught web developer who believes in skill and
              is on an exciting journey through the boundless realm of web
              development.
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1hFsgSoldUvSDYb5e8bP_6DQDr_cR0iTC/view?usp=sharing"
              target="_blank"
              className="px-2 sm:px-4 py-1 sm:py-2 border bg-blue-500 text-textColor hover:bg-textColor hover:border-blue-700 hover:text-blue-500 rounded-md font-medium text-[1.5rem] sm:text-[2rem]"
            >
              Resume
            </a>
            <Link
              to="/about"
              className="px-4 py-2 border bg-blue-500 text-textColor hover:bg-textColor hover:border-blue-700 hover:text-blue-500 rounded-md font-medium text-[1.3rem] sm:text-[2rem]"
            >
              More About Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center order-first md:order-last">
          <div
            className={`flex justify-center items-center relative w-[210px] h-[210px] sm:w-[310px] sm:h-[310px]  max-w-[473px] rounded-full ${
              isDarkMode
                ? "shadow-uniform shadow-textColor -z-10"
                : "shadow-uniform  shadow-black -z-10"
            }`}
          >
            <img
              src={photo}
              alt="Aditya"
              className="w-full rounded-full aspect-square object-contain -z-10"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
