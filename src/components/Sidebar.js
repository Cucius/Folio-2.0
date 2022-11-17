import { GoHome } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
// import { IoFlashOutline, IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { GiFlatHammer, Gi3DGlasses } from "react-icons/gi";
// import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav
        className="fixed z-50 top-0  w-screen h-12
                 flex flex-row  justify-between
                 bg-Lynch text-secondary shadow-lg"
      >
        <a href="#home">
          <SidebarIcon icon={<GoHome size="24" />} text="Home" />
        </a>
        <a href="#projects">
          <SidebarIcon icon={<GiFlatHammer size="24" />} text="Projects" />
        </a>
        <a href="#about">
          <SidebarIcon icon={<Gi3DGlasses size="24" />} text="About Me" />
        </a>
        <a href="#contact">
          <SidebarIcon icon={<HiOutlineMail size="24" />} text="Contact Me" />
        </a>
        {/* <div className="group flex m-1">
        <SidebarIcon icon={<IoFlashOutline size="24" />} />
        <SidebarIcon icon={<IoSunnyOutline size="24" />} />
        <SidebarIcon icon={<IoMoonOutline size="24" />} />
      </div> */}
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

const SidebarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
