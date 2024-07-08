import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import styles from '../css/Hero.module.css';
import { FaBars, FaTimes, FaCode, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';
// import { AiOutlineArrowRight } from 'react-icons/ai';

function HeroNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = [
    "Transforming Dreams into Digital Reality",
    "Redefine Your online Presence with us "
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

  const handlechatClick = ()=>{
    navigate('/contact')
  }

  return (
    <div className={styles.heroContainer}>
      <video className={styles.videoBackground} autoPlay muted loop>
        <source src="/videos/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>techxudo</div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''} `}>
          <li><Link to="/about">About us</Link></li> {/* Updated to use Link */}
          <li
            onMouseEnter={() => showMegaMenu('services')}
            onMouseLeave={hideMegaMenu}
          >
            <a>Services</a> {/* No Link here, as it's just a trigger */}
            {isMegaMenuOpen && activeMenu === 'services' && (
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuItem}>Web Applications</div>
                <div className={styles.megaMenuItem}>Websites</div>
                <div className={styles.megaMenuItem}>E-commerce</div>
                <div className={styles.megaMenuItem}>CMS Development</div>
                <div className={styles.megaMenuItem}>CRM Development</div>
                <div className={styles.megaMenuItem}>ERP Development</div>
                <div className={styles.megaMenuItem}>Mobile Application</div>
                <div className={styles.megaMenuItem}>Smart Contract</div>
                <div className={styles.megaMenuItem}>DevOps</div>
                <div className={styles.megaMenuItem}>Digital Marketing</div>
              </div>
            )}
          </li>
          <li><Link to="/contact">Contact Us</Link></li> {/* Updated to use Link */}
          <li><Link to="/portfolio">Portfolio</Link></li> {/* Updated to use Link */}
        </ul>
        <a href='https://wa.me/923378426564?text=' className={styles.chatButton}>Let's chat</a>
      </nav>

      <div className={styles.heroContent}>
        <div className={styles.heroTitleContainer}>
          <h1 className={styles.heroTitle}>
            {titles[currentTitleIndex]}
            {/* <br />with <span className={styles.gradientText}>top-class software development</span> */}
          </h1>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <FaCode className={styles.icon} />
            <h3>Custom Software Development</h3>
            <p>
              Our custom software development services offer tailor-made solutions that meet your specific business needs. 
              From initial consultation to final implementation, our team ensures that the software aligns perfectly with your 
              operations, providing seamless integration and scalability for future growth.
            </p>
            {/* <AiOutlineArrowRight className={styles.arrow} /> */}
          </div>
          <div className={styles.card}>
            <FaMobileAlt className={styles.icon} />
            <h3>Mobile Apps</h3>
            <p>
              We create innovative mobile applications that provide an exceptional user experience. Whether you need an iOS 
              or Android app, our developers use the latest technologies to deliver high-performance applications that engage 
              users and meet your business objectives.
            </p>
            {/* <AiOutlineArrowRight className={styles.arrow} /> */}
          </div>
          <div className={styles.card}>
            <FaShoppingCart className={styles.icon} />
            <h3>E-commerce Development</h3>
            <p>
              Build a robust online store with our e-commerce development services. We design and develop scalable 
              e-commerce platforms that offer a seamless shopping experience, secure payment gateways, and advanced features 
              to enhance your online presence and drive sales.
            </p>
            {/* <AiOutlineArrowRight className={styles.arrow} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroNavbar;
