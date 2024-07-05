import React from 'react';
import styles from '../css/Footer.module.css';
import logo from '../assets/logo.png'; // Replace with the path to your logo image
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Company Logo" className={styles.logo} />
                </div>
                <div className={styles.contactDetails}>
                    <h2>CONTACT</h2>
                    <p><FaPhone style={{ color: '#ff6347' }} /> +92 337 8426564</p> {/* Tomato color for phone */}
                    <p><FaPhone style={{ color: '#ff6347' }} /> +44 7438 851458</p> {/* Tomato color for phone */}
                    <p><FaEnvelope style={{ color: '#007bff' }} /> info@techxudo.com</p> {/* Blue color for email */}
                </div>
                <div className={styles.address}>
                    <h2>ADDRESS</h2>
                    <p><FaMapMarkerAlt style={{ color: '#28a745' }} /> 17 Sunbeam Close Smithswood Birmingham, UK</p> {/* Green color for address */}
                    <p><FaMapMarkerAlt style={{ color: '#28a745' }} /> R-13 Gulshan e Akbar Malir Karachi, Pakistan</p> {/* Green color for address */}
                </div>
                <div className={styles.socialMedia}>
                    <h2>FOLLOW US</h2>
                    <div className={styles.socialIcons}>
                        <FaInstagram style={{ color: '#c13584' }} /> {/* Instagram color */}
                        <FaLinkedin style={{ color: '#0077b5' }} /> {/* LinkedIn color */}
                        <FaTwitter style={{ color: '#1da1f2' }} /> {/* Twitter color */}
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© 2024 | All Rights Reserved | techxudo</p>
            </div>
        </footer>
    );
}

export default Footer;
