import React, { useState } from 'react';
import styles from '../css/Navbar.module.css';
import { FaBars, FaTimes, FaLocationArrow, FaGlobe, FaCode, FaMobileAlt, FaShoppingCart  } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';

function HeroNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showMegaMenu = (menu) => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    setActiveMenu(menu);
    setIsMegaMenuOpen(true);
  };

  const hideMegaMenu = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    setHideTimeout(setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 3000)); // 3 seconds delay
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
          <li
            onMouseEnter={() => showMegaMenu('services')}
            onMouseLeave={hideMegaMenu}
          >
            <a href="#services">Services</a>
            {isMegaMenuOpen && activeMenu === 'services' && (
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuItem}>Web Design and Development</div>
                <div className={styles.megaMenuItem}>Wordpress</div>
                <div className={styles.megaMenuItem}>Web Applications</div>
                <div className={styles.megaMenuItem}>Mobile Applications</div>
                <div className={styles.megaMenuItem}>Desktop Applications</div>
                <div className={styles.megaMenuItem}>Graphic Designing</div>
                <div className={styles.megaMenuItem}>Content Writing</div>
                <div className={styles.megaMenuItem}>SEO</div>
                <div className={styles.megaMenuItem}>Smart Contracts</div>
                <div className={styles.megaMenuItem}>Magento</div>
                <div className={styles.megaMenuItem}>Shopify Plus</div>
                <div className={styles.megaMenuItem}>Shopify</div>
              </div>
            )}
          </li>
          <li><a href="#contacts">Contacts</a><span className={styles.dot}>•</span></li>
        </ul>
        <button className={styles.chatButton}>Let's chat</button>
      </nav>

      <div className={styles.heroContent}>
        <div className={styles.locationinfoContainer}>
          <span className={styles.locationIcon}><FaLocationArrow /></span>
          <span style={{ fontWeight: 'normal' }}>Based in <span style={{ fontWeight: 'bold' }}>UK</span> Operate <span style={{ fontWeight: 'bold' }}>worldwide</span></span>
          <span className={styles.globeIcon}><FaGlobe /></span>
        </div>

        <div className={styles.heroTitleContainer}>
          <h1 className={styles.heroTitle}>
            Empower your business
            <br />with <span className={styles.gradientText}>top-class software development</span>
          </h1>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <FaCode className={styles.icon} />
            <h3>Custom software development </h3>
            <p>Build software tailored to your business</p>
            <AiOutlineArrowRight className={styles.arrow} />
          </div>
          <div className={styles.card}>
            <FaMobileAlt className={styles.icon} />
            <h3>Mobile Apps</h3>
            <p>Develop seamless mobile applications.</p>
            <AiOutlineArrowRight className={styles.arrow} />
          </div>
          <div className={styles.card}>
            <FaShoppingCart className={styles.icon} />
            <h3>E-commerce Development</h3>
            <p>Build robust e-commerce platforms.</p>
            <AiOutlineArrowRight className={styles.arrow} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroNavbar;
