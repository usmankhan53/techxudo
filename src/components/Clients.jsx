import React, { useState } from 'react';
import { FaHandsHelping, FaBrain, FaChartLine, FaBullseye } from 'react-icons/fa';
import styles from '../css/Clients.module.css';

function Clients() {
  const [clients] = useState([
    { 
      name: 'Wijdan Charity', 
      icon: <FaHandsHelping style={{ color: '#ff6347' }} /> // Tomato color
    },
    { 
      name: 'Conquer Concepts', 
      icon: <FaBrain style={{ color: '#4682b4' }} /> // Steel blue
    },
    { 
      name: 'Conqueror Consulting Group', 
      icon: <FaChartLine style={{ color: '#32cd32' }} /> // Lime green
    },
    { 
      name: '2ndtononeprecisionfirearms', 
      icon: <FaBullseye style={{ color: '#ffa500' }} /> // Orange
    }
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
              {client.icon}
              <span className={styles.clientName}>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
