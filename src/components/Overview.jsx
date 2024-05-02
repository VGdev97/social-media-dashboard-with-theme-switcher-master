import { overviews } from "@/data";

const Overview = ({ darkMode }) => {
  return (
    <div className="py-8">
      <h2
        className={`${
          darkMode ? "text-white" : "text-[#575d6d]"
        }  text-[24px] font-semibold mb-5`}
      >
        Overview - Today
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {overviews.map((overview) => (
          <div
            key={overview.id}
            className={`${
              darkMode
                ? "bg-[#252b43] hover:bg-[#333a56]"
                : "bg-[#f0f3fa] hover:bg-[#e1e3f0]"
            } px-4 py-5 rounded-sm`}
          >
            <div className="flex justify-between items-center mb-4">
              <p
                className={`${
                  darkMode ? "text-[#a0a9ca]" : "text-[#5b5f6b]"
                } font-semibold`}
              >
                {overview.text}
              </p>
              <img src={overview.socialIcon} alt="social icon" />
            </div>
            <div className="flex items-center justify-between">
              <h4
                className={`${
                  darkMode ? "text-white" : "text-[#1c1f28]"
                }  text-[28px] font-bold`}
              >
                {overview.count}
              </h4>
              <div className="flex items-center gap-2">
                <img src={overview.icon} alt="icon" />
                <p
                  className={`${
                    overview.down ? "text-[#be485e]" : "text-[#38a892]"
                  } font-semibold`}
                >
                  {overview.percentage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
