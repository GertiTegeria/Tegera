import React, { useState } from "react";
import {
  Settings,
  Clock,
  Home,
  Zap,
  BarChart3,
  MapPin,
} from "lucide-react";



export default function ServiceSection() {

    const servicesStyles = {
      section: {
        padding: "120px 2rem",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      container: {
        maxWidth: "1054px",
        margin: "0 auto",
        textAlign: "center",
      },
      title: {
        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
        fontWeight: "700",
        color: "#1B315E",
        marginBottom: "2rem",
        fontFamily: "Montserrat, sans-serif",
      },
      subtitle: {
        fontSize: "1.1rem",
        color: "#666666",
        marginBottom: "4rem",
        maxWidth: "700px",
        margin: "0 auto 4rem",
        lineHeight: "1.6",
        fontFamily: "Montserrat, sans-serif",
      },
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "16px",
        marginTop: "32px",
      },
      card: {
        backgroundColor: "#ffffff",
        border: "1px solid #CCCDCF ",
        maxWidth: "362px",
        minHeight: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        gap: "16px",
        padding: "16px 20px",
        textAlign: "left",
        transition: "all 0.3s ease",
        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
        // overflow: "hidden",
      },
    //   cardHover: {
    //     transform: "translateY(-5px)",
    //     boxShadow: "0 20px 40px rgba(27, 49, 94, 0.1)",
    //     // borderColor: '#1B315E'
    //   },
      iconWrapper: {
        backgroundColor: "#F4F5F7",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      },
      iconWrapperHover: {
        backgroundColor: "#1B315E",
        transform: "scale(1.1)",
      },
      icon: {
        color: "#1B315E",
        transition: "color 0.3s ease",
      },
    //   iconHover: {
    //     color: "white",
    //   },
      cardTitle: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#07080B",
        fontFamily: "Montserrat",
      },
      cardDescription: {
        fontSize: "0.95rem",
        color: "#666666",
        lineHeight: "1.6",
        fontFamily: "Montserrat, sans-serif",
      },
    };
    
    
    const ServicesSection = () => {
      const [hoveredCard, setHoveredCard] = useState(null);
    
      const services = [
        {
          icon: Settings,
          title:
            "Automate processes for business models already using CRM systems.",
        },
        {
          icon: Clock,
          title: "Streamline internal processes for greater efficiency.",
        },
        {
          icon: Home,
          title:
            "Enhance client communication and support, ensuring optimal performance and functionality.",
        },
        {
          icon: Zap,
          title: "Identify new digital value opportunities for clients.",
        },
        {
          icon: BarChart3,
          title: "Transform and optimize digital channels.",
        },
        {
          icon: MapPin,
          title:
            "Offer expert technical consultancy to drive growth and innovation.",
        },
        {
          icon: BarChart3,
          title: "Transform and optimize digital channels.",
        },
        {
          icon: MapPin,
          title:
            "Offer expert technical consultancy to drive growth and innovation.",
        },
      ];
    
      return (
        <section style={servicesStyles.section}>
          <div style={servicesStyles.container}>
            <h2 style={servicesStyles.title}>What we do?</h2>
            <p style={servicesStyles.subtitle}>
              Our technologies help businesses across various industries unlock
              their full potential by delivering solutions that:
            </p>
    
            <div style={servicesStyles.grid}>
              {services.map((service, index) => {
                const IconComponent = service.icon;
                // const isHovered = hoveredCard === index;
    
                return (
                  <div
                    key={index}
                    style={
                      servicesStyles.card
                     
                    }
                    // onMouseEnter={() => setHoveredCard(index)}
                    // onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      style={
                        servicesStyles.iconWrapper
                      
                      }
                    >
                      <IconComponent
                        size={28}
                        style={{
                          ...servicesStyles.icon,
                          // ...(isHovered ? servicesStyles.iconHover : {}),
                        }}
                      />
                    </div>
                    <h3 style={servicesStyles.cardTitle}>{service.title}</h3>
                    <p style={servicesStyles.cardDescription}>
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    };  

  return (
    <ServicesSection/>
    )
}
