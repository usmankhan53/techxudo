import React, { useState } from 'react';
import styles from '../css/Industry.module.css';
import { FaStethoscope, FaDollarSign, FaLaptop, FaShoppingCart, FaCloud, FaBriefcase, FaFilm, FaRobot } from 'react-icons/fa';

const industries = [
  { title: "Healthcare", icon: <FaStethoscope className={styles.icon} />, content: "Innovative solutions for the healthcare industry, enhancing patient care and operational efficiency." },
  { title: "Finance", icon: <FaDollarSign className={styles.icon} />, content: "Financial technology services that drive digital transformation in the finance sector." },
  { title: "Technology", icon: <FaLaptop className={styles.icon} />, content: "Cutting-edge technology solutions to drive growth and innovation." },
  { title: "Retail and E-commerce", icon: <FaShoppingCart className={styles.icon} />, content: "Solutions for retail and e-commerce to enhance customer experience and streamline operations." },
  { title: "SaaS", icon: <FaCloud className={styles.icon} />, content: "Software as a Service solutions to deliver scalable and efficient software products." },
  { title: "Business services", icon: <FaBriefcase className={styles.icon} />, content: "Business services solutions to optimize operations and drive business success." },
  { title: "Media and entertainment", icon: <FaFilm className={styles.icon} />, content: "Innovative media and entertainment solutions to captivate and engage audiences." },
  { title: "AI", icon: <FaRobot className={styles.icon} />, content: "AI-driven solutions to revolutionize industries and create smarter applications." }
];

function Industry() {
  const [activeTab, setActiveTab] = useState(industries[0].title);

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  const activeIndustry = industries.find(industry => industry.title === activeTab);

  return (
    <section className={styles.industry}>
      <h1 className={styles.heading}>Industries We Serve</h1>
      <div className={styles.tabs}>
        {industries.map(industry => (
          <div 
            key={industry.title} 
            className={`${styles.tab} ${activeTab === industry.title ? styles.activeTab : ''}`} 
            onClick={() => handleTabClick(industry.title)}
          >
            {industry.icon}
            <h3>{industry.title}</h3>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h2>{activeIndustry.title}</h2>
        <p>{activeIndustry.content}</p>
      </div>
    </section>
  );
}

export default Industry;
