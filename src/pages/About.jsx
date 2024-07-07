import React from 'react';
import styles from './css/about.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.glassmorphismContainer}>
        <h2 className={styles.sectionTitle}>Message from CEO</h2>
        <div className={styles.ceoSection}>
          <img src="/images/ceo.png" alt="CEO" className={styles.ceoImage} /> {/* Replace with actual image path */}
          <div className={styles.ceoText}>
            <p className={styles.sectionContent}>
              Our CEO, Syed Talha, is committed to delivering innovative solutions and exceptional service. 
              With years of experience in the industry, Syed leads our team with a vision to drive technological advancements 
              and provide unparalleled value to our clients.
            </p>
          </div>
        </div>
      </div>
      
      <div className={styles.glassmorphismContainer}>
        <h2 className={styles.sectionTitle}>Mission & Vision</h2>
        <p className={styles.sectionContent}>
          Our mission is to revolutionize the tech industry with cutting-edge software solutions that cater to 
          our clients' unique needs. We envision a world where technology seamlessly integrates with everyday life, 
          enhancing efficiency and connectivity.
        </p>
      </div>
      
      <div className={styles.glassmorphismContainer}>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <p className={styles.sectionContent}>
          Choosing us means partnering with a team of experts dedicated to your success. We offer customized solutions, 
          a customer-centric approach, and a commitment to quality. Our innovative technology and personalized service 
          set us apart from the competition.
        </p>
      </div>
    </div>
  );
}

export default About;
