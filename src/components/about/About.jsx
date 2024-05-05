import React, { useRef } from "react";
import TypingAnimation from "../../utils/typingAnimation/TypingAnimation";
import Technology from "./technology/Technologies";
import { useSelector } from "react-redux";
const About = () => {
  const textElement = useRef(null);
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={`about-container flex flex-col mt-40 mx-auto px-0 sm:px-20 max-w-[1200px] ${
        isDarkMode && "text-textColor"
      }`}
    >
      <div className=" text-6xl   ">
        {" "}
        I am{" "}
        <TypingAnimation
          element={textElement}
          text={[
            "Ambitious,",
            "Learner,",
            "Self-Disciplined,",
            "Self-Motivated,",
            "Supportive.",
          ]}
        />
      </div>
      <div className="mt-16 text-[1.5rem] text-wrap">
        <ul>
          <p>
            I am an ambitious self-taught Frontend Developer with a background
            in mechanical engineering. Driven by curiosity and a passion for
            technology, I made the leap into frontend development and fully
            immersed myself with a lot of practice with{" "}
            <span className="text-customColor font-semibold">
              HTML, CSS, JavaScript,
            </span>{" "}
            and various frameworks like{" "}
            <span className="text-customColor font-semibold">
              React.js and Redux.js
            </span>
            .
          </p>
          <p className="mt-10">
            Crafting seamless user experiences and translating design into
            functional code became my true passion. My background in mechanical
            engineering adds a unique perspective to my approach, enabling me to
            approach problem-solving systematically with attention to detail for
            harmonious outcomes.
          </p>
          <p className="mt-10">
            My educational journey began with a strong academic foundation,
            followed by the mechanical engineering. While exploring the world of
            machines and design, I discovered my passion for technology and
            problem-solving. This led me to embrace frontend development as my
            true calling, and I decided to pivot my career in this rapidly
            evolving domain.
          </p>
          <p className="mt-10">
            My portfolio showcases my journey in frontend development with a
            collection of projects highlighting my dedication to intuitive and
            visually appealing web applications. I'm passionate about
            collaborating with creative and driven teams to create innovative
            digital experiences. If you share this enthusiasm for pushing
            technology and design boundaries, let's connect and shape the future
            together!
          </p>
          <p className="my-10">
            Thank you for visiting my portfolio. If you have any questions or
            would like to explore potential opportunities, please don't hesitate
            to reach out. I look forward to connecting with you!
          </p>
        </ul>
      </div>
      <Technology />
    </div>
  );
};

export default About;
