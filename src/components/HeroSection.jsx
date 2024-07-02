import React from 'react';
import styles from '../css/HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <video className={styles.videoBackground} autoPlay muted loop>
        <source src="https://diffco.us/wp-content/themes/diffconew/static-template/build/images/home-v5/video/main_screen_04_2024.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className={styles.heroContent}>
        <h1>Welcome to TechXudo</h1>
        <p>Innovative solutions for your tech needs</p>
      </div> */}
    </section>
  );
}

export default HeroSection;
