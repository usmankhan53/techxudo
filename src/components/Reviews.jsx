import React, { useState } from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import styles from '../css/Reviews.module.css';

function Reviews() {
  const [reviews] = useState([
    {
      name: 'Avis Brown',
      image: '/images/avis.png', // Replace with actual image path or leave empty for default avatar
      text: 'I highly recommend Syed’s service. His website design exceeded my expectations.'
    },
    {
      name: 'Frederique Bekale',
      image: '/images/fredie.png',
      text: "Syed was the project manager for the rebranding of my business and I’m so happy with the result!",
    },
    {
        name: 'Tiffani Medcalf',
        image: '/images/tiffani.png', // Replace with actual image path or leave empty for default avatar
        text: "Talha is AMAZING to work with! He did a wonderful job communicating and designing our rental website."
      },
      {
        name: 'Saleha Ali Khan',
        image: '/images/saleha.png',
        text: "Syed is an excellent website developer someone who is passionate about creating high-quality websites.",
      },
      {
        name: 'Maurice Malon',
        image: '/images/maurice.png',
        text: "Syed is a very skilled and well-rounded expert. I've been collaborating with him on my denimbmc.com blog."
      },
      {
        name: 'DayMonesha',
        image: '/images/dymonesha.png',
        text: "Syed is a great person to work with. He goes above and beyond to complete asthethically pleasing website designs."
      },
      {
        name: 'Rachel Kalien',
        image: '/images/rachel.png',
        text: "It has been great all around experience with Syed.He was so kind and explained me many things that I didn't understand."
      }
    
  ]);

  return (
    <section className={styles.reviews}>
      <h2 className={styles.heading}>Reviews</h2>
      <p className={styles.subtitle}>
        We have served thousands of businesses across various industries. Here are some of our valuable clients sharing their views about our web design and development services in the US.
      </p>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.review}>
                {review.image ? (
                  <img src={review.image} alt={review.name} className={styles.avatar} />
                ) : (
                  <FaUserCircle className={styles.defaultAvatar} />
                )}
                <h3 className={styles.name}>{review.name}</h3>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={styles.star} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
