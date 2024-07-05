import React from 'react';
import styles from '../css/Services.module.css';
import { FaLaptopCode, FaWordpress, FaMobileAlt, FaDesktop, FaPencilAlt, FaPenFancy, FaSearch, FaEthereum, FaMagento, FaShopify } from 'react-icons/fa';

function Services() {
  const services = [
    { 
      title: "Web Design and Development", 
      description: "Creating stunning websites tailored to your needs.", 
      tags: ["Responsive", "UI/UX", "SEO"], 
      icon: <FaLaptopCode style={{ color: '#007bff' }} /> // Blue color for code-related services
    },
    { 
      title: "WordPress", 
      description: "Building dynamic and powerful WordPress websites.", 
      tags: ["Themes", "Plugins", "Customization"], 
      icon: <FaWordpress style={{ color: '#21759b' }} /> // Blue color for WordPress
    },
    { 
      title: "Web Applications", 
      description: "Developing robust web applications with modern technologies.", 
      tags: ["React", "Node.js", "APIs"], 
      icon: <FaLaptopCode style={{ color: '#28a745' }} /> // Green color for web applications
    },
    { 
      title: "Mobile Applications", 
      description: "Creating mobile applications for both iOS and Android.", 
      tags: ["Swift", "Kotlin", "React Native"], 
      icon: <FaMobileAlt style={{ color: '#ffc107' }} /> // Yellow color for mobile apps
    },
    { 
      title: "Desktop Applications", 
      description: "Building desktop applications for various platforms.", 
      tags: ["Electron", "C#", "Java"], 
      icon: <FaDesktop style={{ color: '#fd7e14' }} /> // Orange color for desktop apps
    },
    { 
      title: "Graphic Designing", 
      description: "Designing eye-catching graphics for your brand.", 
      tags: ["Logos", "Banners", "Illustrations"], 
      icon: <FaPencilAlt style={{ color: '#e83e8c' }} /> // Pink color for graphic design
    },
    { 
      title: "Content Writing", 
      description: "Providing high-quality content writing services.", 
      tags: ["Articles", "Blogs", "Copywriting"], 
      icon: <FaPenFancy style={{ color: '#6f42c1' }} /> // Purple color for writing
    },
    { 
      title: "SEO", 
      description: "Optimizing your website to rank higher on search engines.", 
      tags: ["Keywords", "Backlinks", "On-page SEO"], 
      icon: <FaSearch style={{ color: '#6610f2' }} /> // Dark blue color for SEO
    },
    { 
      title: "Smart Contracts", 
      description: "Developing secure smart contracts for blockchain.", 
      tags: ["Ethereum", "Solidity", "DeFi"], 
      icon: <FaEthereum style={{ color: '#3c3c3b' }} /> // Ethereum color
    },
    { 
      title: "Magento", 
      description: "Building and customizing eCommerce sites with Magento.", 
      tags: ["Themes", "Extensions", "Customization"], 
      icon: <FaMagento style={{ color: '#ff5e57' }} /> // Magento color
    },
    { 
      title: "Shopify Plus", 
      description: "Creating high-performance eCommerce stores with Shopify Plus.", 
      tags: ["Themes", "Apps", "Customization"], 
      icon: <FaShopify style={{ color: '#96c93d' }} /> // Shopify Plus color
    },
    { 
      title: "Shopify", 
      description: "Developing scalable eCommerce stores with Shopify.", 
      tags: ["Themes", "Apps", "Customization"], 
      icon: <FaShopify style={{ color: '#5b9bd5' }} /> // Shopify color
    },
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Services We Provide</h2>
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
            <button className={styles.button}>Let's chat <span>&rarr;</span></button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
