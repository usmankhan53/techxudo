import React from 'react';
import styles from '../css/Services.module.css';
// import { useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaEthereum, FaDev, FaBullhorn, FaStore, FaDesktop, FaDatabase, FaServer, FaChartLine } from 'react-icons/fa';

function Services() {
  const services = [
    { 
      title: "Web Applications", 
      description: "Developing robust web applications with modern technologies.", 
      tags: ["APIs", "MEAN", "MERN", "LAMP", "GO Lang"], 
      icon: <FaLaptopCode style={{ color: "#8075e5" }} /> // Green color for web applications
    },
    { 
      title: "Websites", 
      description: "Creating stunning websites tailored to your needs.", 
      tags: ["Responsive", "UI/UX", "SEO"], 
      icon: <FaDesktop style={{ color: "#8075e5" }} /> // Blue color for websites
    },
    { 
      title: "E-commerce Stores", 
      description: "Building and customizing eCommerce sites.", 
      tags: ["Shopify", "Magento", "WooCommerce"], 
      icon: <FaStore style={{ color: "#8075e5" }} /> // Red color for e-commerce stores
    },
    { 
      title: "CMS Development", 
      description: "Creating content management systems for easy content handling.", 
      tags: ["WordPress", "Drupal", "Joomla", "Wix", "Squarespace"], 
      icon: <FaDatabase style={{ color: "#8075e5" }} /> // Purple color for CMS development
    },
    { 
      title: "CRM Development", 
      description: "Developing customer relationship management systems.", 
      tags: ["Salesforce", "Zoho", "Custom CRM"], 
      icon: <FaChartLine style={{ color: "#8075e5" }} /> // Orange color for CRM development
    },
    { 
      title: "ERP Development", 
      description: "Creating enterprise resource planning systems for businesses.", 
      tags: ["SAP", "Odoo", "Custom ERP"], 
      icon: <FaServer style={{ color: '#8075e5' }} /> // Yellow color for ERP development
    },
    { 
      title: "Mobile Application Development", 
      description: "Creating mobile applications for both iOS and Android.", 
      tags: ["Swift", "Kotlin", "React Native", "Flutter"], 
      icon: <FaMobileAlt style={{ color: '#8075e5' }} /> // Green color for mobile apps
    },
    { 
      title: "Smart Contract Development", 
      description: "Developing secure smart contracts for blockchain.", 
      tags: ["Ethereum", "Solidity", "DeFi"], 
      icon: <FaEthereum style={{ color: '#8075e5' }} /> // Ethereum color
    },
    { 
      title: "DevOps", 
      description: "Implementing DevOps practices for continuous integration and delivery.", 
      tags: ["CI/CD", "Docker", "Kubernetes"], 
      icon: <FaDev style={{ color: '#8075e5' }} /> // Dark blue color for DevOps
    },
    { 
      title: "Digital Marketing", 
      description: "Promoting your brand through effective digital marketing strategies.", 
      tags: ["SEO", "PPC", "Social Media"], 
      icon: <FaBullhorn style={{ color: '#8075e5' }} /> // Pink color for digital marketing
    },
  ];

  // const navigate = useNavigate();

  const handlechatClick = () => {
    // navigate('/contact'); // Navigate to the portfolio page
    window.open("https://wa.me/923378426564?text=");
  };

  return (
    <section className={styles.services}>
      <h2 className={styles.title}>What We Offer?</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className={styles.tags}>
              {service.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}   
            </div>
            <button onClick={handlechatClick} className={styles.button}>Let's chat <span>&rarr;</span></button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
