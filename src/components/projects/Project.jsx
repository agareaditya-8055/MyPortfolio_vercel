import React from "react";
import Card from "./card/Card";

const Project = () => {
  return (
    <div className="max-w-[1280px] mx-auto text-[10px] ">
      <span className="flex justify-center">
        <h2 className="text-[3rem] sm:text-[4rem] font-bold text-customColor ">
          Learning to Creation
        </h2>
      </span>
      <div className="flex justify-center gap-8 p-8 flex-wrap mt-14">
        <Card />
      </div>
    </div>
  );
};

export default Project;
