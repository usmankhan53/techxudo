import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './css/Services.module.css';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaEthereum, 
  FaDev, 
  FaBullhorn, 
  FaStore, 
  FaDesktop, 
  FaDatabase, 
  FaServer, 
  FaChartLine 
} from 'react-icons/fa';

const Services = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const service = queryParams.get('service');

  const renderServiceContent = () => {
    switch (service) {
      case 'Web Applications':
        return (
          <div className={styles.serviceDetail}>
            <FaLaptopCode size={50} />
            <h3>Web Applications</h3>
            <p>We create scalable and high-performance web applications tailored to your business needs. Our solutions are designed to enhance user experience and drive business growth.</p>
          </div>
        );
      case 'Websites':
        return (
          <div className={styles.serviceDetail}>
            <FaDesktop size={50} />
            <h3>Websites</h3>
            <p>Our website development services focus on creating responsive and engaging websites that capture your brand essence and convert visitors into customers.</p>
          </div>
        );
      case 'E-commerce':
        return (
          <div className={styles.serviceDetail}>
            <FaStore size={50} />
            <h3>E-commerce Development</h3>
            <p>We build robust e-commerce platforms that provide seamless shopping experiences and drive sales. From storefront design to payment integration, we cover all aspects of e-commerce.</p>
          </div>
        );
      case 'CMS Development':
        return (
          <div className={styles.serviceDetail}>
            <FaDatabase size={50} />
            <h3>CMS Development</h3>
            <p>Our CMS development services empower you to manage your content effortlessly. We customize CMS platforms to fit your unique requirements and streamline content management.</p>
          </div>
        );
      case 'CRM Development':
        return (
          <div className={styles.serviceDetail}>
            <FaServer size={50} />
            <h3>CRM Development</h3>
            <p>Enhance customer relationships with our CRM solutions. We develop CRM systems that help you track interactions, manage sales, and improve customer service.</p>
          </div>
        );
      case 'ERP Development':
        return (
          <div className={styles.serviceDetail}>
            <FaChartLine size={50} />
            <h3>ERP Development</h3>
            <p>Optimize your business processes with our ERP solutions. We integrate various functions into a unified system to improve efficiency and data accuracy.</p>
          </div>
        );
      case 'Mobile Application':
        return (
          <div className={styles.serviceDetail}>
            <FaMobileAlt size={50} />
            <h3>Mobile Application Development</h3>
            <p>Our mobile application development services provide you with high-quality apps for iOS and Android platforms, enhancing user engagement and expanding your reach.</p>
          </div>
        );
      case 'Smart Contract':
        return (
          <div className={styles.serviceDetail}>
            <FaEthereum size={50} />
            <h3>Smart Contracts</h3>
            <p>Leverage blockchain technology with our smart contract development services. We create secure and transparent contracts that automate and validate transactions.</p>
          </div>
        );
      case 'DevOps':
        return (
          <div className={styles.serviceDetail}>
            <FaDev size={50} />
            <h3>DevOps</h3>
            <p>Improve your development lifecycle with our DevOps solutions. We integrate development and operations to enhance productivity, collaboration, and deployment speed.</p>
          </div>
        );
      case 'Digital Marketing':
        return (
          <div className={styles.serviceDetail}>
            <FaBullhorn size={50} />
            <h3>Digital Marketing</h3>
            <p>Boost your online presence with our digital marketing services. We offer strategies to enhance visibility, drive traffic, and generate leads through various channels.</p>
          </div>
        );
      default:
        return <p>Select a service to see more details.</p>;
    }
  };

  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.heading}>Service Details</h2>
      <div className={styles.serviceContent}>
        {renderServiceContent()}
      </div>
    </div>
  );
};

export default Services;
