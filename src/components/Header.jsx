import { Switch } from "@/components/ui/switch";

const Header = ({ toggleMode, darkMode }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8">
      <div className="flex flex-col  items-start text-white">
        <h1
          className={`${
            darkMode ? "text-[#fff]" : "text-[#25252d]"
          } text-[26px] font-semibold`}
        >
          Social Media Dashboard
        </h1>
        <p
          className={`${
            darkMode ? "text-[#9fa2c5]" : " text-[#676975]"
          } font-semibold `}
        >
          Total Followers: 23,004
        </p>
      </div>
      <hr
        className={`w-full md:hidden my-4 md:my-0 md:mx-4 border-t-[1px] ${
          darkMode ? "border-[#373a4d]" : "border-[#898c9b]"
        } md:border-none`}
      />
      <div
        className={`flex justify-between md:items-center w-full md:w-auto gap-4 ${
          darkMode ? "dark-text" : "light-text"
        }`}
      >
        <p
          className={`${
            darkMode ? "text-[#8c96af]" : "text-[#7f839e]"
          } font-semibold`}
        >
          Dark Mode
        </p>
        <Switch onClick={toggleMode} />
      </div>
    </div>
  );
};

export default Header;
