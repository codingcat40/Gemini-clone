import { Button } from "@mui/material";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Sidebar = () => {
  const [toggleSidebar, setSidebarToggle] = useState(false);

  return (
    <div
      className={`bg-slate-100 h-screen flex flex-col justify-between p-4 transition-all duration-300 ${
        toggleSidebar
          ? "min-w-[20rem] max-w-[20rem]"
          : "min-w-[7rem] max-w-[7rem]"
      }`}
    >
      {" "}
      {/* Top Section */}
      <div className="flex flex-col gap-4">
        <Button
          className="flex flex-row items-start max-w-12"
          onClick={() => setSidebarToggle(!toggleSidebar)}
        >
          <img src={assets.menu_icon} className="w-[2rem]" alt="Menu" />
        </Button>

        <div className="flex flex-col gap-2">
          <Button
            className="flex flex-row gap-2 h-12 items-start rounded-full min-w-12 max-w-28"
            size={"small"}
          >
            <img src={assets.plus_icon} className="w-[1rem]" alt="Plus" />
            {toggleSidebar && (
              <p className="text-gray-500 text-sm font-medium">New chat</p>
            )}
          </Button>

          {toggleSidebar && (
            <div>
            <p className="text-gray-500 text-sm font-medium mt-4">Recent</p>
            <Button className="flex flex-row items-start w-[12rem]">
                <img src={assets.message_icon} alt="" className="w-8 h-8" />
                <p className="text-black text-xs font-light w-[7rem]">what is react ?</p>
            </Button>
            </div>
          )}
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Button className="flex flex-row gap-2 items-center h-8">
            <img src={assets.question_icon} className="w-[1rem]" alt="Help" />
            {toggleSidebar && (
              <p className="text-black text-sm font-medium">Help</p>
            )}
            <span className="w-2 h-2 bg-red-500 rounded-full ml-auto"></span>
          </Button>

          <Button className="flex flex-row gap-2 items-center h-8">
            <img
              src={assets.history_icon}
              className="w-[1rem]"
              alt="Activity"
            />
            {toggleSidebar && (
              <p className="text-black text-sm font-medium">Activity</p>
            )}
            <span className="ml-auto"></span>
          </Button>

          <Button className="flex flex-row gap-2 items-center h-8">
            <img
              src={assets.setting_icon}
              className="w-[1rem]"
              alt="Settings"
            />
            {toggleSidebar && (
              <p className="text-black text-sm font-medium">Settings</p>
            )}
            <span className="w-2 h-2 bg-red-500 rounded-full ml-auto"></span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
