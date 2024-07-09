import React, { useState } from 'react';
import styles from './css/about.module.css';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a variety of services including web development, mobile app development, and digital marketing.' },
    { question: 'How can I contact support?', answer: 'You can contact our support team via email at info@techxudo.com or through our contact form on the website.' },
    { question: 'What is your refund policy?', answer: 'We offer a 30-day refund policy for our services if you are not satisfied.' },
    { question: 'Do you offer custom solutions?', answer: 'Yes, we offer custom solutions tailored to your specific needs and requirements.' },
    { question: 'How long does it take to complete a project?', answer: 'The timeline for a project depends on its complexity, but we provide estimated completion times before starting.' }
  ];

  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.heading}>About Us</h2>
      <div className={styles.glassmorphismContainer}>
        <h2 className={styles.sectionTitle}>Message from CEO</h2>
        <div className={styles.ceoSection}>
          <div className={styles.ceoText}>
            <p className={styles.sectionContent}>
              Our CEO, Syed Talha, is committed to delivering innovative solutions and exceptional service. 
              With years of experience in the industry, Syed leads our team with a vision to drive technological advancements 
              and provide unparalleled value to our clients.
            </p>
          </div>
          <img src="/images/ceo.png" alt="CEO" className={styles.ceoImage} /> {/* Replace with actual image path */}
        </div>
      </div>
      <div className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className={`${styles.faqArrow} ${activeIndex === index ? styles.arrowUp : styles.arrowDown}`}>▲</span>
              </div>
              {activeIndex === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
