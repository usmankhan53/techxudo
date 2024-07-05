import React from 'react';
import styles from '../css/Form.module.css';

function Form() {
    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Contact Us</h2>
                <form>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel} htmlFor="name">Name</label>
                        <input className={styles.inputField} type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel} htmlFor="email">Email</label>
                        <input className={styles.inputField} type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel} htmlFor="message">Message</label>
                        <textarea className={styles.inputField} id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button className={styles.submitButton} type="submit">Send Message</button>
                </form>
            </div>
            <div className={styles.infoSection}>
                <h3 className={styles.infoTitle}>Why Choose Us?</h3>
                <p className={styles.infoText}>
                    We offer top-notch solutions tailored to your needs. Our team of experts is dedicated to providing the best service.
                </p>
                <ul className={styles.infoList}>
                    <li className={styles.infoListItem}>Innovative Solutions</li>
                    <li className={styles.infoListItem}>Experienced Team</li>
                    <li className={styles.infoListItem}>24/7 Support</li>
                </ul>
            </div>
        </div>
    );
}

export default Form;
