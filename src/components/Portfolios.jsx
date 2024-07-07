import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Portfolios.module.css';

// Sample data for portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Moakhat',
    imageUrl: '/images/moakhat.png',
    rating: 5,
    url: 'https://www.moakhat.org/en'
  },
  {
    id: 2,
    title: 'CCG Consultants',
    imageUrl: '/images/ccgconsultants.png',
    rating: 5,
    url: 'https://www.ccgconsultants.org'
  },
  {
    id: 3,
    title: 'Cookies By Freddie',
    imageUrl: '/images/cookiesbyfreddie.png',
    rating: 5,
    url: 'https://cookiesbyfreddie.com/'
  },
  {
    id: 4,
    title: 'Little White Dish',
    imageUrl: '/images/littlewhitedish.png',
    rating: 5,
    url: 'https://littlewhitedish.com/'
  }
];

// RatingStars component
const RatingStars = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return (
    <div className={styles.rating}>
      {stars.map((filled, index) => (
        <span key={index} className={`${styles.star} ${filled ? styles.filled : ''}`}>★</span>
      ))}
    </div>
  );
};

function Portfolios() {

  const navigate = useNavigate();

  const handleCardClick = (url) => {
    window.location.href = url;
  };

  const handleViewAllClick = () => {
    navigate('/portfolio'); // Navigate to the portfolio page
  };

  return (
    <section className={styles.portfolios}>
      <h1 className={styles.heading}>Our Work</h1>
      <div className={styles.grid}>
        {portfolioItems.map(item => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => handleCardClick(item.url)}
          >
            <img src={item.imageUrl} alt={item.title} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <RatingStars rating={item.rating} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.viewAllButton} onClick={handleViewAllClick}>
          View All
        </button>
      </div>
    </section>
  );
}

export default Portfolios;
