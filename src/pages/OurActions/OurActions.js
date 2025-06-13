import React from 'react';
import aboutUsPlaceholder from '../../assets/aboutUsPlaceholder.png'; // Example placeholder image
import Header from '../../Components /HeaderComponent/Header';
import GetInTouch from '../../Components /ContactUs/GetInTouch';
import Navbar from '../../Components /navbar/Navbar';
import Footer from '../../Components /Footer/Footer';

// CSS Modules styles
const styles = {
  container: {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff'
  },
  serviceItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '80px',
    gap: '60px'
  },
  serviceItemReverse: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '80px',
    gap: '60px',
    flexDirection: 'row-reverse'
  },
  imageContainer: {
    flex: '1',
    minWidth: '400px'
  },
  serviceImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  },
  textContainer: {
    flex: '1',
    padding: '0 20px'
  },
  serviceText: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#4a5568',
    margin: '0',
  },
  responsive: {
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '40px',
      textAlign: 'center'
    }
  }
};

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      text: "We design innovative technological ecosystems through cutting-edge architecture and dedicated R&D.",
      image: aboutUsPlaceholder
    },
    {
      id: 2,
      text: "Leveraging agile best practices, we ensure organizations can swiftly adapt to technological advancements and changing market dynamics, improving operational efficiency and responsiveness.",
      image: aboutUsPlaceholder
    },
    {
      id: 3,
      text: "We address unique industry challenges by promoting collaboration, integrating technology and innovation, to achieve significant outcomes across diverse sectors.",
      image: aboutUsPlaceholder
    },
    {
      id: 4,
      text: "Combining our expertise in software development, microservices, and DevOps, we drive innovation and optimize processes, for better product performance and delivering exceptional value.",
      image: aboutUsPlaceholder
    }
  ];

  return (
    <div style={styles.container}>
      {services.map((service, index) => (
        <div 
          key={service.id} 
          style={index % 2 === 0 ? styles.serviceItem : styles.serviceItemReverse}
        >
          <div style={styles.imageContainer}>
            <img 
              src={service.image} 
              alt={`Service ${service.id}`}
              style={styles.serviceImage}
            />
          </div>
          <div style={styles.textContainer}>
            <p style={styles.serviceText}>
              {service.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const OurActions = () => {
  return (
    <div>
    <Navbar/>
      <Header headerTitle="Our Actions" />
      <ServicesSection />
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default OurActions;