import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/Hero.module.css';
import ceo from '../assets/logo.png'
import { FaBars, FaTimes, FaCode, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';

function HeroNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = [
    "Transforming Dreams into Digital Reality",
    "Redefine Your Online Presence with Us"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(prevIndex => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [titles.length]);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navigate = useNavigate();

  const handleMegaMenuClick = (service) => {
    navigate(`/services?service=${encodeURIComponent(service)}`);
  };

  return (
    <div className={styles.heroContainer}>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>techxudo</div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''} `}>
          <li><Link to="/about">About us</Link></li> 
          <li
            onMouseEnter={() => showMegaMenu('services')}
            onMouseLeave={hideMegaMenu}
          >
            <a href='#services'>Services</a> 
            {isMegaMenuOpen && activeMenu === 'services' && (
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('Web Applications')}>Web Applications</div>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('Websites')}>Websites</div>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('E-commerce')}>E-commerce</div>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('CMS Development')}>CMS Development</div>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('CRM Development')}>CRM Development</div>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('ERP Development')}>ERP Development</div>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('Mobile Application')}>Mobile Application</div>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('Smart Contract')}>Smart Contract</div>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('DevOps')}>DevOps</div>
                <div className={styles.megaMenuItem} onClick={() => handleMegaMenuClick('Digital Marketing')}>Digital Marketing</div>
              </div>
            )}
          </li>
          <li><Link to="/contact">Contact Us</Link></li> 
          <li><Link to="/portfolio">Portfolio</Link></li> 
        </ul>
        <a href='https://wa.me/923378426564?text=' className={styles.chatButton}>Let's chat</a>
      </nav>

      <div className={styles.heroContent}>
        <div className={styles.heroTitleContainer}>
          <h1 className={styles.heroTitle}>
            {titles[currentTitleIndex]}
          </h1>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardWrapper}>
            <div className={`${styles.card} ${styles.card1}`}>
              <FaCode className={styles.icons} size={40} />
              <h3>Custom Software Development</h3>
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <FaMobileAlt className={styles.icons} size={40} />
              <h3>Mobile Applications</h3>
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <FaShoppingCart className={styles.icons} size={40} />
              <h3>E-commerce Development</h3>
            </div>
            {/* <div className={`${styles.card} ${styles.card4}`}>
              <FaShoppingCart className={styles.icons} size={40} />
              <h3>E-commerce Development</h3>
            </div> */}
            <img className={styles.ceo} src={ceo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroNavbar;
