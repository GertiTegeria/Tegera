import React, { useState } from 'react';
import getInTouchImage from '../../assets/getInTouchImage.png'
// CSS Modules styles
const styles = {
  container: {
    padding: '80px 0',
    margin: '0 auto',
    backgroundColor:" rgba(244, 245, 247, 1)",
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#2c5282',
    margin: '0 0 20px 0',
  },
  subtitle: {
    fontSize: '18px',
    color: 'rgba(7, 8, 11, 1)',
    margin: '0 0 10px 0',
  },
  description: {
    fontSize: '18px',
    color: 'rgba(7, 8, 11, 1)',
    margin: '0',
  },
  contentContainer: {
    display: 'flex',
    gap: '60px',
    justifyContent: 'center',
  },
  imageContainer: {
    height: '425px',
    width: '510px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  },
  workspaceImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  formContainer: {
    minWidth: '504px',
    padding: '10px',
  },
  interestSection: {
    marginBottom: '30px'
  },
  interestLabel: {
    fontSize: '1.1rem',
    color: 'rgba(27, 49, 94, 1)',
    marginBottom: '15px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap'
  },
  interestButton: {
    padding: '8px 24px',
    border: '1px solid #e2e8f0',
    color: '#4a5568',
    borderRadius: '12px',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  interestButtonActive: {
    padding: '10px 20px',
    border: '1px solid #2c5282',
    backgroundColor: 'rgba(27, 49, 94, 0.1)',
    color: 'rgba(27, 49, 94, 1)',
    fontWeight:"bold",
    borderRadius: '12px',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  formGroup: {
    marginBottom: '25px'
  },
  input: {
    width: '100%',
    padding: '15px',
    border: 'none',
    borderBottom: '2px solid #e2e8f0',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    color: '#4a5568',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    border: 'none',
    borderBottom: '2px solid #e2e8f0',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    color: '#4a5568',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: 'rgba(27, 49, 94, 1)',
    color: '#ffffff',
    padding: '14px 74px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    // width: '100%'
  },
  responsiveContainer: {
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '40px'
    }
  }
};

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

  // Placeholder workspace image - you'll replace this with your actual image
  const workspaceImageSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%232c5282'/%3E%3Ctext x='200' y='250' text-anchor='middle' fill='white' font-size='24' font-family='Arial'%3EWorkspace Image%3C/text%3E%3C/svg%3E";

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Get In Touch</h2>
        <p style={styles.subtitle}>We would like to stay in touch. Want to connect yet?</p>
        <p style={styles.description}>Reach out through the form below, and we will get back to you within a day.</p>
      </div>
      
      <div style={styles.contentContainer}>
        <div style={styles.imageContainer}>
          <img 
            src={getInTouchImage}
            alt="Workspace with computer showing 'DO MORE'" 
            style={styles.workspaceImage}
          />
        </div>
        
        <div style={styles.formContainer}>
          <div>
            <div style={styles.interestSection}>
              <div style={styles.interestLabel}>I'm interested in.....</div>
              <div style={styles.buttonGroup}>
                {interests.map((interest) => (
                  <div
                    key={interest.id}
                    style={selectedInterest === interest.id ? styles.interestButtonActive : styles.interestButton}
                    onClick={() => setSelectedInterest(interest.id)}
                  >
                    {interest.label}
                  </div>
                ))}
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
            
            <div style={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                style={styles.textarea}
              />
            </div>
            
            <button style={styles.submitButton} onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;