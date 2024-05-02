import { social } from "@/data";

const Social = ({ darkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {social.map((socialInfo) => (
        <div
          key={socialInfo.id}
          className={`${
            darkMode
              ? "bg-[#252b43] hover:bg-[#333a56]"
              : "bg-[#f0f3fa] hover:bg-[#e1e3f0]"
          } flex flex-col items-center py-7 px-2 rounded-sm border-t-[3px] ${
            socialInfo.borderColorClass
          } `}
        >
          <div className="flex items-center gap-2">
            <img src={socialInfo.socialIcon} alt="social icon" />
            <p
              className={`${
                darkMode ? "text-[#9fa7cc]" : "text-[#5d606f]"
              } font-semibold`}
            >
              {socialInfo.nickname}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3
              className={`${
                darkMode ? "text-white" : "text-[#1b1e27]"
              }  text-[44px] font-bold`}
            >
              {socialInfo.followers}
            </h3>
            <p className="text-[#858ca8] uppercase font-normal tracking-[3px] mt-[-5px]">
              Followers
            </p>
          </div>
          <div className="flex items-center text-[#4e9b91] gap-1 mt-5">
            <img src={socialInfo.icon} alt="icon" />
            <p className="font-semibold">{socialInfo.today} Today</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Social;
