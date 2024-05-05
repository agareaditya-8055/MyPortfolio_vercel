import React from "react";
import project_yonoha from "../../../assets/project_yonoha.png";
import { Link } from "react-router-dom";

// This is your project data array. It should be moved to a separate file or a state management store (like Redux) in a real application.
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

const Card = () => {
  return (
    <>
      {projectData.map((item) => {
        return (
          <div
            key={item.id}
            className="relative flex flex-col items-center sm:w-[550px] sm:h-[350px] w-[450px] h-[250px]  rounded-2xl "
          >
            <img
              className=" object-fill absolute w-[400px] h-[200px] sm:w-[550px]  sm:h-[300px] rounded-2xl -z-10"
              src={item.img}
              alt="Project Image"
            />

            <button className=" w-full cursor-pointer absolute bottom-0 p-5 left-0  bg-customColor text-white text-[1rem] rounded-2xl">
              <Link to={`/projects/${item.name}`}>{item.btnName}</Link>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Card;
