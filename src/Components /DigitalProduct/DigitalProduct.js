import React, { useState } from 'react';
import productImage from "../../assets/productImage.png";
import removeIcon from "../../assets/add-circle--button-remove-cross-add-buttons-plus-circle-+-mathematics-math.png";
import addIcon from "../../assets/add-circle--button-remove-cross-add-buttons-plus-circle-+-mathematics-math (1).png";

export default function DigitalProduct() {
    const digitalProductsStyles = {
        section: {
          padding: "120px 2rem",
          backgroundColor: "#FFFFFF",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        container: {
          maxWidth: "1054px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "31px",
          alignItems: "stretch",
        },
        leftContent: {
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          flex: 1,
          minHeight: "400px",
        },
        
        title: {
          fontSize: "clamp(2rem, 4vw, 2.5rem)",
          fontWeight: "700",
          color: "#1B315E",
          marginBottom: "2rem",
          fontFamily: "Montserrat, sans-serif",
          textDecoration: "underline",
          textDecorationColor: "#1B315E",
          textDecorationThickness: "3px",
          textUnderlineOffset: "8px",
        },
        accordionContainer: {
          display: "flex",
          flexDirection: "column",
          gap: "1px",
        },
        accordionItem: {
          backgroundColor: "white",
          borderBottom: "1px solid #ADADAD",
          transition: "all 0.3s ease",
        },
        accordionHeader: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
          cursor: "pointer",
          backgroundColor: "white",
          borderBottom: "none",
          transition: "all 0.3s ease",
        },
        accordionTitle: {
          fontSize: "18px",
          fontWeight: "700",
          color: "#1B315E",
          fontFamily: "Montserrat, sans-serif",
          margin: 0,
        },
        accordionIcon: {
          color: "#1B315E",
          transition: "transform 0.3s ease",
        },
        accordionContent: {
          maxHeight: "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          backgroundColor: "white",
        },
        accordionContentActive: {
          maxHeight: "200px",
        },
        accordionText: {
          padding: "0 24px 20px 24px",
          fontSize: "16px",
          color: "#07080B",
      fontWeight: "400",
          fontFamily: "Montserrat, sans-serif",
        },
        rightContent: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          position: "relative",
        },
        imageContainer: {
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        },
        
        image: {
          width: "100%",
          height: "100%",
          backgroundImage: `url(${productImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        headerWrapper: {
          textAlign: "center",
          marginBottom: "60px",
          maxWidth: "416px",
          margin: "0 auto",
        },
        
        headerTitle: {
          fontSize: "40px",
          fontWeight: "700",
          color: "#1B315E",
          fontFamily: "Montserrat, sans-serif",
        },
        
      };

  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Digital bill solutions",
      content: "Digital bill solutions that process raw input information coming from operational billing systems, preprocess PDF invoices, and makes them available to customers through a secured, optimized web portal."
    },
    {
      title: "Digital experience layer",
      content: "Creating seamless digital experiences that bridge the gap between traditional systems and modern user expectations through innovative interface design."
    },
    {
      title: "Gen Z platform",
      content: "A comprehensive platform designed specifically for Generation Z users, featuring intuitive interfaces, social integration, and mobile-first experiences."
    },
    {
      title: "Loyalty & Reward",
      content: "Advanced loyalty and reward systems that increase customer engagement and retention through personalized incentives and gamification elements."
    },
    {
      title: "Log analytics & monitoring",
      content: "Comprehensive log analytics and monitoring solutions that provide real-time insights into system performance and user behavior patterns."
    },
    {
      title: "Real-time fiscalisation",
      content: "Real-time fiscal compliance solutions that ensure accurate tax reporting and regulatory compliance across multiple jurisdictions."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };


  return (
    <section style={digitalProductsStyles.section}>
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={digitalProductsStyles.headerWrapper}>
        <h2 style={digitalProductsStyles.headerTitle}>
          Learn more about our digital products
        </h2>
      </div>
  
      <div style={digitalProductsStyles.container}>
        <div style={digitalProductsStyles.leftContent}>
          <div style={digitalProductsStyles.accordionContainer}>
            {accordionItems.map((item, index) => (
              <div key={index} style={digitalProductsStyles.accordionItem}>
                <div
                  style={digitalProductsStyles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 style={digitalProductsStyles.accordionTitle}>
                    {item.title}
                  </h3>
                  <div style={digitalProductsStyles.accordionIcon}>
                    {activeAccordion === index ? (
                      <img src={removeIcon} alt="remove" />
                    ) : (
                      <img src={addIcon} alt="add" />
                    )}
                  </div>
                </div>
                <div
                  style={{
                    ...digitalProductsStyles.accordionContent,
                    ...(activeAccordion === index
                      ? digitalProductsStyles.accordionContentActive
                      : {}),
                  }}
                >
                  <p style={digitalProductsStyles.accordionText}>
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div style={digitalProductsStyles.rightContent}>
          <div style={digitalProductsStyles.imageContainer}>
            <div style={digitalProductsStyles.image}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
