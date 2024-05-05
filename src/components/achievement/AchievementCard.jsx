import { useSelector } from "react-redux";

const AchieveCard = ({ title, description }) => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={`bg-achieveColor rounded-lg shadow-md  p-6 transform transition duration-300 hover:scale-105 -z-10`}
    >
      <h3 className="text-xl font-bold text-customColor  mb-2">{title}</h3>
      <p className={`text-gray-950 ${isDarkMode && "text-textColor"}`}>
        {description}
      </p>
    </div>
  );
};
export default AchieveCard;
