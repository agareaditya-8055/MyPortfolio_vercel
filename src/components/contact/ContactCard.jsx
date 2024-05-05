import React from "react";

const ContactCard = ({ item }) => {
  const { id, title, text, icon } = item;
  return (
    <div className="sm:max-w-[300px] w-full sm:w-[300px] bg-contactCard rounded-2xl mx-auto flex gap-5 p-4">
      <div className="w-20 h-20 bg-darkColor rounded-full flex justify-center items-center text-textColor text-[2rem]">
        {icon}
      </div>
      <div className="flex flex-col ">
        <h1 className="text-2xl font-bold text-textColor">{title}</h1>
        <span className="text-textColor">{text}</span>
      </div>
    </div>
  );
};

export default ContactCard;
