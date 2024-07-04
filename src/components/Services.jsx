import React from 'react';
import styles from '../css/Services.module.css';
import { FaLaptopCode, FaWordpress, FaMobileAlt, FaDesktop, FaPencilAlt, FaPenFancy, FaSearch, FaEthereum, FaMagento, FaShopify } from 'react-icons/fa';

function Services() {
  const services = [
    { title: "Web Design and Development", description: "Creating stunning websites tailored to your needs.", tags: ["Responsive", "UI/UX", "SEO"], icon: <FaLaptopCode /> },
    { title: "WordPress", description: "Building dynamic and powerful WordPress websites.", tags: ["Themes", "Plugins", "Customization"], icon: <FaWordpress /> },
    { title: "Web Applications", description: "Developing robust web applications with modern technologies.", tags: ["React", "Node.js", "APIs"], icon: <FaLaptopCode /> },
    { title: "Mobile Applications", description: "Creating mobile applications for both iOS and Android.", tags: ["Swift", "Kotlin", "React Native"], icon: <FaMobileAlt /> },
    { title: "Desktop Applications", description: "Building desktop applications for various platforms.", tags: ["Electron", "C#", "Java"], icon: <FaDesktop /> },
    { title: "Graphic Designing", description: "Designing eye-catching graphics for your brand.", tags: ["Logos", "Banners", "Illustrations"], icon: <FaPencilAlt /> },
    { title: "Content Writing", description: "Providing high-quality content writing services.", tags: ["Articles", "Blogs", "Copywriting"], icon: <FaPenFancy /> },
    { title: "SEO", description: "Optimizing your website to rank higher on search engines.", tags: ["Keywords", "Backlinks", "On-page SEO"], icon: <FaSearch /> },
    { title: "Smart Contracts", description: "Developing secure smart contracts for blockchain.", tags: ["Ethereum", "Solidity", "DeFi"], icon: <FaEthereum /> },
    { title: "Magento", description: "Building and customizing eCommerce sites with Magento.", tags: ["Themes", "Extensions", "Customization"], icon: <FaMagento /> },
    { title: "Shopify Plus", description: "Creating high-performance eCommerce stores with Shopify Plus.", tags: ["Themes", "Apps", "Customization"], icon: <FaShopify /> },
    { title: "Shopify", description: "Developing scalable eCommerce stores with Shopify.", tags: ["Themes", "Apps", "Customization"], icon: <FaShopify /> },
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Services we provide</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className={styles.tags}>
              {service.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <div className={styles.iconContainer}>
              {service.icon}
            </div>
            <button className={styles.button}>Let's chat <span>&rarr;</span></button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
