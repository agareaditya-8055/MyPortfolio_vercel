import React from "react";
import { techLogo } from "../../../utils/contants/Contant";
import TechCard from "./card/TechCard";

const Technology = () => {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-4xl text-center text-customColor">
        TECHNOLOGIES I KNOW
      </h2>
      <div className="flex flex-wrap gap-12 items-center justify-center">
        {techLogo.map((item) => (
          <TechCard
            key={item.id}
            path={item.path}
            currentColor={item.currentColor}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Technology;
