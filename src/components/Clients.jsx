import React, { useState } from 'react';
import styles from '../css/Clients.module.css';

function Clients() {
  const [clients] = useState([
    { logo: '/images/ccclogo.png' },
    { logo: '/images/moakhat.svg' },
    { logo: '/images/turk.png' },
    { logo: '/images/firearm.png' }
  ]);

  return (
    <section className={styles.clients}>
      <h2 className={styles.heading}>Our Clients</h2>
      <p className={styles.subtitle}>
        From across the globe, organizations entrust our exceptional services to achieve their goals.
      </p>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {clients.concat(clients).map((client, index) => ( // Concatenate clients to make them repeat
            <div key={index} className={styles.slide}>
              <img src={client.logo} alt="Client Logo" className={styles.clientLogo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
