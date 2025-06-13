import React from 'react';
import headerBg from '../../assets/headerBg.png'; // Example background image

// CSS Modules styles
const styles = {
  container: {
    position: 'relative',
    backgroundImage: `url(${headerBg})`,
    backgroundSize: '100px 150px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '80px 20px',
    textAlign: 'center',
    overflow: 'hidden',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
 overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(244, 245, 247, 0.9)',
    mixBlendMode: 'multiply', // Blends with background image
    zIndex: '1'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'rgba(27, 49, 94, 1)',
    margin: '0',
    position: 'relative',
    zIndex: '2',
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    pointerEvents: 'none'
  },
  circle1: {
    width: '120px',
    height: '120px',
    top: '20px',
    left: '10%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  circle2: {
    width: '80px',
    height: '80px',
    top: '60px',
    right: '15%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  circle3: {
    width: '60px',
    height: '60px',
    bottom: '40px',
    left: '20%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  circle4: {
    width: '100px',
    height: '100px',
    bottom: '10px',
    right: '8%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)'
  },
  circle5: {
    width: '40px',
    height: '40px',
    top: '30%',
    left: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  circle6: {
    width: '90px',
    height: '90px',
    top: '10px',
    right: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
};

const Header = ({headerTitle}) => {
  return (
    <section style={styles.container}>
      {/* Background overlay */}
      <div style={styles.overlay}></div>
      
      {/* Decorative circles */}
      <div style={{...styles.decorativeCircle, ...styles.circle1}}></div>
      <div style={{...styles.decorativeCircle, ...styles.circle2}}></div>
      <div style={{...styles.decorativeCircle, ...styles.circle3}}></div>
      <div style={{...styles.decorativeCircle, ...styles.circle4}}></div>
      <div style={{...styles.decorativeCircle, ...styles.circle5}}></div>
      <div style={{...styles.decorativeCircle, ...styles.circle6}}></div>
      
      {/* Main title */}
      <h2 style={styles.title}>{headerTitle}</h2>
    </section>
  );
};

export default Header;