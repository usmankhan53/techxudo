import React, { useState } from 'react';
import styles from '../css/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function HeroNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <div className={styles.heroContainer}>
      <video className={styles.videoBackground} autoPlay muted loop>
        <source src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v5/video/main_screen_04_2024.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <nav className={styles.navbar}>
        <div className={styles.logo}>techxudo</div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><a href="#aboutus">About us</a></li>
          <li><a href="#cases">Cases</a></li>
          <li onMouseEnter={toggleMegaMenu} onMouseLeave={toggleMegaMenu}>
            <a href="#services">Services</a>
            {isMegaMenuOpen && (
              <div className={styles.megaMenu}>
                <div>
                  <h4>Mobile Development</h4>
                  <p>Frontend Development</p>
                </div>
                <div>
                  <h4>Backend Development</h4>
                  <p>Web Development</p>
                </div>
                <div>
                  <h4>Team Augmentation</h4>
                  <p>Project Management</p>
                </div>
              </div>
            )}
          </li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#blog" className={styles.blogLink}>Blog <span className={styles.dot}>•</span></a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
        <button className={styles.chatButton}>Let's chat</button>
      </nav>
      {/* <div className={styles.heroContent}>
        <h1>Welcome to TechXudo</h1>
        <p>Innovative solutions for your tech needs</p>
      </div> */}
    </div>
  );
}

export default HeroNavbar;
