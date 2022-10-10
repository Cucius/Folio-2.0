import { GoHome } from "react-icons/go";
import { IoFlashOutline, IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { GiFlatHammer, Gi3DGlasses } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div
      className="fixed z-50 top-0  w-screen h-16
                 flex flex-row  justify-between
                 bg-gray-500 text-secondary shadow-lg"
    >
      <SidebarIcon icon={<GoHome size="32" />} text="Home" />
      <SidebarIcon icon={<GiFlatHammer size="32" />} text="Projects" />
      <SidebarIcon icon={<Gi3DGlasses size="32" />} text="About Me" />
      <div className="group flex m-1">
        <SidebarIcon icon={<IoFlashOutline size="24" />} />
        <SidebarIcon icon={<IoSunnyOutline size="24" />} />
        <SidebarIcon icon={<IoMoonOutline size="24" />} />
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
