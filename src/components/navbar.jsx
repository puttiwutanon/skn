import React, { useState } from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className='navbar'>
          <h1>web application</h1>

          <div className={`nav-contents ${menuVisible ? 'hide' : ''}`}>
              <span><Link to="home" spy={true} smooth={true} offset={-50} duration={500}>หน้าหลัก</Link></span>
              <span><Link to="about" spy={true} smooth={true} offset={-60} duration={500}>เกี่ยวกับเรา</Link></span>
              <span><Link to="work" spy={true} smooth={true} offset={-80} duration={500}>ภาพกิจกรรม</Link></span>
              <span><Link to="faq" spy={true} smooth={true} offset={-80} duration={500}>คำถามที่ถามบ่อย</Link></span>
              <span><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>ติดต่อเรา</Link></span>
          </div>

          <div className="hamburger-menu" onClick={toggleMenu}>
            <i className={`fa-solid fa-bars fa-2x ${menuVisible ? 'show' : ''}`}></i>
          </div>
      </div>

      <div className={`hamburger-content ${menuVisible ? 'show' : ''}`} >
        <ul>
          <li><Link to="home" spy={true} smooth={true} offset={-50} duration={500}>หน้าหลัก</Link></li>
          <li><Link to="about" spy={true} smooth={true} offset={-60} duration={500}>เกี่ยวกับเรา</Link></li>
          <li><Link to="work" spy={true} smooth={true} offset={-80} duration={500}>ภาพกิจกรรม</Link></li>
          <li><Link to="faq" spy={true} smooth={true} offset={-80} duration={500}>คำถามที่ถามบ่อย</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>ติดต่อเรา</Link></li>
        </ul>
      </div>
    </>
  );
};
