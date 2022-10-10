import { FaGrunt } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoFlashOutline } from "react-icons/io5";
import { Gi3DMeeple } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav
      className=" flex justify-end h-16 pl-4 
                 bg-gray-800
                 border border-gray-500 w-screen"
    >
      <ul className="navbar-nav">
        <NavbarItem icon={<FaGrunt size="20" />} />
        <NavbarItem icon={<Gi3DMeeple size="20" />} />
        <NavbarItem icon={<IoFlashOutline size="20" />} />
        <NavbarItem icon={<GoGear size="20" />} />
        <NavbarItem icon={<AiFillCaretDown size="20" />}>
          <DropdownMenu />
        </NavbarItem>
      </ul>
    </nav>
  );
};

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  const DropdownItem = ({ children, leftIcon, rightIcon, goToMenu }) => {
    return (
      <a href="#" className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="dropdown">
      <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} classNames="menu-primary">
        <div className="menu">
          <DropdownItem>settings</DropdownItem>
          <DropdownItem leftIcon={<IoFlashOutline size="20" />} rightIcon={<AiFillCaretDown size="20" />} goToMenu="settings" />
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === "settings"} unmountOnExit timeout={500} classNames="menu-secondary">
        <div className="menu">
          <DropdownItem leftIcon={<IoFlashOutline size="20" />} goToMenu="main" />
        </div>
      </CSSTransition>
    </div>
  );
};

const NavbarItem = ({ children, icon, text }) => {
  const [open, setOpen] = useState();

  return (
    <li className="navbar-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
};

export default Navbar;
