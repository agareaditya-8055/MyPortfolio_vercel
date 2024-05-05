import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDarkMode, toggleLightMode } from "../../store/slices/themeSlice";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const list = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/projects",
      name: "Projects",
    },
    {
      id: 4,
      path: "/achievements",
      name: "Achievements",
    },
    {
      id: 5,
      path: "/contact",
      name: "Contact",
    },
  ];

  const handleDarkModeToggle = () => {
    if (isDarkMode) {
      dispatch(toggleLightMode());
    } else {
      dispatch(toggleDarkMode());
    }
  };
  return (
    <header
      className={`w-full mx-auto  fixed top-0 left-0  right-0 py-3  px-4  ${
        isDarkMode ? "text-textColor bg-darkColor " : "bg-textColor text-black "
      }`}
    >
      <div className="  border-b-2 border-customColor  flex flex-col md:flex md:flex-row md:justify-between md:items-center py-5 md:px-32 px-7 ">
        <span className="text-blue-500 text-4xl font-bold mb-2 sm:mb-1">
          AA
        </span>
        <div
          className="text-4xl absolute right-8 top-6 md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <span>&#10005;</span> : <span>&#9776;</span>}
        </div>

        <ul
          className={`md:flex md:items-center md:px-0 px-7 md:mt-0 mt-5 md:gap-8 md:pb-0 pb-12 absolute md:static  md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto ${
            isDarkMode
              ? "text-textColor bg-darkColor"
              : "bg-textColor text-black"
          }  ${open ? "top-20" : "top-[-490px]"}  `}
        >
          {list.map((list) => {
            return (
              <li
                key={list.id}
                className="text-[1.5rem] font-medium md:my-0 my-7"
                onClick={() => setOpen(false)}
              >
                <Link to={list.path}>{list.name}</Link>
              </li>
            );
          })}
          <button
            className="text-gray-700 hover:text-gray-500 focus:outline-none"
            onClick={handleDarkModeToggle}
          >
            {isDarkMode ? (
              <BsFillSunFill color="gold" size={25} />
            ) : (
              <BsFillMoonStarsFill size={25} />
            )}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
