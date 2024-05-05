import React from "react";
import { useParams } from "react-router-dom";
import project_yonoha from "../../../assets/project_yonoha.png";
import { useSelector } from "react-redux";

const LiveProject = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const { projectName } = useParams();

  const projectData = [
    {
      id: 1,
      name: "Yonoha",
      description:
        "Now, This time was to create my first own Food-Ordering web app named 'Yonoha'. This responsive Yonoha web app was challenging and it help me a lot to sharpen my concepts whether it was handling API, managing state for large scaling application and more.",
      img: project_yonoha,
      btnName: "Know More",
    },
  ];

  const project = projectData.find((item) => item.name === projectName);

  return (
    <div
      className={`max-w-[1280px] min-h-[85vh] mx-auto justify-start sm:justify-center px-16 sm:px-16 items-center flex flex-col md:flex-row ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="w-full md:w-1/2 flex justify-center items-center sm:mb-0 mb-10">
        <img
          src={project.img}
          alt="description"
          className=" w-full md:max-w-[312px] md:max-h-[312px] object-cover rounded-xl  aspect-square "
        />
      </div>
      <div className="w-full md:w-1/2  ">
        <h2 className="text-7xl text-customColor border-b-2 border-customColor font-bold mb-5 sm:mb-10">
          {project.name}
        </h2>
        <p className="text-2xl sm:text-4xl">{project.description}</p>
        <button className="px-14 py-3 bg-white rounded-2xl mt-5 text-black text-xl font-bold">
          <a href="https://yonoha.vercel.app" target="_blank">
            Go Live
          </a>
        </button>
      </div>
    </div>
  );
};

export default LiveProject;
