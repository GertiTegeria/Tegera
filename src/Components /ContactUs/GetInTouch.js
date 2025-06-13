import React, { useState } from 'react';
import getInTouchImage from '../../assets/getInTouchImage.png';
import styles from './GetInTouch.module.css';

const GetInTouch = () => {
  const [selectedInterest, setSelectedInterest] = useState('information');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const interests = [
    { id: 'information', label: 'information' },
    { id: 'career', label: 'career' },
    { id: 'partnership', label: 'partnership' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', { ...formData, interest: selectedInterest });
    // Handle form submission here
  };

  return (
    <div className={styles.container}>
    <div className={styles.content}>

      <div className={styles.header}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>We would like to stay in touch. Want to connect yet?</p>
        <p className={styles.description}>Reach out through the form below, and we will get back to you within a day.</p>
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img 
            src={getInTouchImage}
            alt="Workspace with computer showing 'DO MORE'" 
            className={styles.workspaceImage}
          />
        </div>
        
        <div className={styles.formContainer}>
          <div>
            <div className={styles.interestSection}>
              <div className={styles.interestLabel}>I'm interested in.....</div>
              <div className={styles.buttonGroup}>
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    className={selectedInterest === interest.id ? styles.interestButtonActive : styles.interestButton}
                    onClick={() => setSelectedInterest(interest.id)}
                  >
                    {interest.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
              />
            </div>
            
            <button className={styles.submitButton} onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default GetInTouch;