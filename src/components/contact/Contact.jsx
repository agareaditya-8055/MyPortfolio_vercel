import React from "react";
import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const Contact = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const contactCard = [
    {
      id: 1,
      title: "My Address",
      text: "Nagpur, India 440034",
      icon: <AiFillHome />,
    },
    {
      id: 2,
      title: "Email Me",
      text: "adityaagare8055@gmail.com",
      icon: <MdEmail />,
    },
    {
      id: 3,
      title: "My Github",
      text: "https://github.com/agareaditya-8055",
      icon: <FaGithub />,
    },
    {
      id: 4,
      title: "My LinkedIn",
      text: "https://www.linkedin.com/in/aditya-agare-b04773195/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <div className="max-w-[1280px]  mx-auto min-h-[85vh]">
      <div className="sm:max-w-[900px]  bg-achieveColor mx-auto min-h-[60vh] p-5">
        <h1 className="text-5xl sm:text-7xl font-bold text-customColor">
          Contact Me :
        </h1>
        <div className="sm:max-w-[650px] flex flex-wrap gap-10 sm:gap-20  mx-auto mt-10 ">
          {contactCard.map((item) => {
            return <ContactCard key={item.id} item={item} />;
          })}
        </div>
        <div className="sm:max-w-[650px]  mx-auto my-20">
          <h2 className="text-5xl text-customColor font-bold">GET IN TOUCH</h2>

          <p
            className={`mt-4  text-xl sm:text-2xl ${
              isDarkMode && "text-textColor"
            }`}
          >
            Thank you for visiting my portfolio. If you have any questions or
            would like to explore potential opportunities, please don't hesitate
            to reach out. I am constantly looking for new opportunities in
            industry, I am willing to work in the field of web-development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
