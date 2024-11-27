import React, { useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logO.jpg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div id='navbar' className='navbar'>
      <img src={logo} alt="Logo" className="nav-logo" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-close" />
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">My Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <div className="nav-connect"><a href='#contact'>Connect with me</a></div>
    </div>
  );
}

export default Navbar;
