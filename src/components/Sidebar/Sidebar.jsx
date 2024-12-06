import { assets } from "../../assets/assets";
import AddIcon from '@mui/icons-material/Add';
const Sidebar = () => {
  return (
    <div className="bg-slate-100 min-w-80 max-w-52 min-h-full space-y-8">
      <div>
        <img src={assets.menu_icon} alt="" />
      </div>

      <div>
        <div className="flex flex-row">
          {/* <img src={assets.plus_icon} className="size-8" alt="" /> */}
          <AddIcon className="size-16"/>
          <p>New chat</p>
        </div>
      </div>

      <div>
        <div className="flex flex-row">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="flex flex-row">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
        <div className="flex flex-row">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
