import React from 'react';
import styles from './css/portfolio.module.css';

// Sample data for portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Moakhat',
    imageUrl: '/images/moakhat.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://www.moakhat.org/en' // URL to navigate to
  },
  {
    id: 2,
    title: 'CCG Consultants',
    imageUrl: '/images/ccgconsultants.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://www.ccgconsultants.org' // URL to navigate to
  },
  {
    id: 3,
    title: 'Cookies By Freddie',
    imageUrl: '/images/cookiesbyfreddie.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://cookiesbyfreddie.com/' // URL to navigate to
  },
  {
    id: 4,
    title: 'Little White Dish',
    imageUrl: '/images/littlewhitedish.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://littlewhitedish.com/' // URL to navigate to
  },
  {
    id: 5,
    title: 'Modify My Beauty',
    imageUrl: '/images/modifymybeauty.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://modifymybeauty.com' // URL to navigate to
  },
  {
    id: 6,
    title: 'Deni MBMC',
    imageUrl: '/images/denimbmc.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://denimbmc.com/' // URL to navigate to
  },
  {
    id: 7,
    title: 'Fire Arms',
    imageUrl: '/images/2ndtononeprecisionfirearms.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://2ndtononeprecisionfirearms.com' // URL to navigate to
  },
  {
    id: 8,
    title: 'Pelt Alliance',
    imageUrl: '/images/peltalliance.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: "https://peltalliance.com/" // URL to navigate to
  },
  {
    id: 9,
    title: 'Dwell Rich',
    imageUrl: '/images/designz.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://designz.dwell-rich.com/' // URL to navigate to
  },
  {
    id: 10,
    title: 'The Rasoo The Cleaning',
    imageUrl: '/images/therasoothecleaning.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://therasoothecleaning.com/' // URL to navigate to
  },
  {
    id: 11,
    title: 'The Blooming Mum',
    imageUrl: '/images/thebloomingmum.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://thebloomingmum.com/' // URL to navigate to
  },
  {
    id: 12,
    title: 'Incredible Engineers',
    imageUrl: '/images/incrediableengineers.png', // Replace with actual image path
    rating: 5, // Rating out of 5
    url: 'https://www.credibleengineers.com/' // URL to navigate to
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
  const handleCardClick = (url) => {
    window.location.href = url; // Navigate to the URL
  };

  return (
    <section className={styles.portfolios}>
      <h1 className={styles.heading}>Our Work</h1>
      <div className={styles.grid}>
        {portfolioItems.map(item => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => handleCardClick(item.url)} // Handle card click
          >
            <img src={item.imageUrl} alt={item.title} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              {/* <p className={styles.description}>{item.description}</p> */}
              <RatingStars rating={item.rating} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolios;
