import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Settings,
  Clock,
  Home,
  Zap,
  BarChart3,
  MapPin,
} from "lucide-react";
import logoSvg from "./assets/logo g-01 3.svg";
import backgroundSvg from "./assets/Rectangle 5369.png";
import arrowDownSvg from "./assets/Group 8930.png";
import arrowRightSvg from "./assets/Arrow 2.png";

const navbarStyles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(27, 49, 94, 0.1)",
    zIndex: 1000,
    padding: "0 2rem",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1B315E",
    textDecoration: "none",
  },
  navMenu: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    color: "#666666",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "32px",
    height: "32px",
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
  contactBtn: {
    backgroundColor: "#1B315E",
    color: "white",
    width: "150px",
    height: "48px",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileToggle: {
    display: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#333",
  },
};

const carouselStyles = {
  carousel: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    marginTop: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: "white",
    textAlign: "center",
    padding: "2rem",
    opacity: 0,
    transform: "translateX(100%)",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay",
  },
  slideActive: {
    opacity: 1,
    transform: "translateX(0)",
  },
  slideContent: {
    maxWidth: "800px",
    zIndex: 2,
  },
  slideTitle: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "700",
    marginBottom: "1.5rem",
    lineHeight: "1.2",
  },
  slideSubtitle: {
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
    marginBottom: "2.5rem",
    opacity: 0.9,
    maxWidth: "600px",
    margin: "0 auto 2.5rem",
  },
  learnMoreBtn: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    color: "#1B315E",
    border: "1px solid #FFFFFF",
    width: "194px",
    height: "48px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  
    gap: "8px",
  
    alignItems: "center",
    justifyContent: "center",
  },
  
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    color: "white",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
    zIndex: 3,
  },
  prevButton: {
    left: "2rem",
  },
  nextButton: {
    right: "2rem",
  },
  indicators: {
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "0.5rem",
    zIndex: 3,
  },
  indicator: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  indicatorActive: {
    backgroundColor: "white",
    transform: "scale(1.2)",
  },
};

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
    maxWidth: "1200px",
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
    padding: "16px 25px",
    textAlign: "left",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    overflow: "hidden",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(27, 49, 94, 0.1)",
    // borderColor: '#1B315E'
  },
  iconWrapper: {
    backgroundColor: "#F4F5F7",
    width: "50px",
    height: "50px",
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
  iconHover: {
    color: "white",
  },
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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav style={navbarStyles.navbar}>
      <a href="#" style={navbarStyles.logo}>
        <img
          src={logoSvg}
          alt="Tegeria Logo"
          style={{ verticalAlign: "middle" }}
        />
      </a>
      <ul style={navbarStyles.navMenu}>
        <li style={navbarStyles.navItem}>
          <a href="#" style={navbarStyles.navLink}>
            Help
          </a>
        </li>
        <li style={navbarStyles.navItem}>
          <a href="#" style={navbarStyles.navLink}>
            Solutions
          </a>
          <img
            src={arrowDownSvg}
            alt="Arrow Down"
            style={{ verticalAlign: "middle", marginLeft: "8px" }}
          />
        </li>
        <li style={navbarStyles.navItem}>
          <a href="#" style={navbarStyles.navLink}>
            Company
          </a>
          <img
            src={arrowDownSvg}
            alt="Arrow Down"
            style={{ verticalAlign: "middle", marginLeft: "8px" }}
          />
        </li>
        <li style={navbarStyles.navItem}>
          <a href="#" style={navbarStyles.navLink}>
            Blog
          </a>
        </li>
        <li style={navbarStyles.navItem}>
          <button
            style={navbarStyles.contactBtn}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1B315E")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1B315ECC")}
          >
            Contact Us
          </button>
        </li>
      </ul>
      <button
        style={navbarStyles.mobileToggle}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Tegeria | Meant for Good",
      subtitle: "Committed to implement good technology for everyone",
      buttonText: "Learn more",
      Icon: <img src={arrowRightSvg} alt="Arrow Right" />,
    },
    {
      title: "Innovation Driven",
      subtitle: "Building the future with cutting-edge technology solutions",
      buttonText: "Discover more",
      Icon: <img src={arrowRightSvg} alt="Arrow Right" />,
    },
    {
      title: "Global Impact",
      subtitle: "Creating positive change through technology worldwide",
      buttonText: "Explore now",
      Icon: <img src={arrowRightSvg} alt="Arrow Right" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div style={carouselStyles.carousel}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            ...carouselStyles.slide,
            ...(index === currentSlide ? carouselStyles.slideActive : {}),
            backgroundImage: `linear-gradient(135deg, #1B315ECC 0%, rgba(27, 49, 94, 0.9) 100%), url(${backgroundSvg})`,
          }}
        >
          <div style={carouselStyles.slideContent}>
            <h1 style={carouselStyles.slideTitle}>{slide.title}</h1>
            <p style={carouselStyles.slideSubtitle}>{slide.subtitle}</p>
            <button
              style={carouselStyles.learnMoreBtn}
              // onMouseEnter={(e) => {
              //   e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              //   e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
              // }}
              // onMouseLeave={(e) => {
              //   e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              //   e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
              // }}
            >
                <span style={{ marginRight: "8px" }}>{slide.buttonText}</span>{slide.Icon}
            </button>
          </div>
        </div>
      ))}

      {/* <button
        style={{ ...carouselStyles.navButton, ...carouselStyles.prevButton }}
        onClick={prevSlide}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        style={{ ...carouselStyles.navButton, ...carouselStyles.nextButton }}
        onClick={nextSlide}
      >
        <ChevronRight size={20} />
      </button> */}

      <div style={carouselStyles.indicators}>
        {slides.map((_, index) => (
          <div
            key={index}
            style={{
              ...carouselStyles.indicator,
              ...(index === currentSlide ? carouselStyles.indicatorActive : {}),
            }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
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
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                style={{
                  ...servicesStyles.card,
                  ...(isHovered ? servicesStyles.cardHover : {}),
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  style={{
                    ...servicesStyles.iconWrapper,
                    ...(isHovered ? servicesStyles.iconWrapperHover : {}),
                  }}
                >
                  <IconComponent
                    size={28}
                    style={{
                      ...servicesStyles.icon,
                      ...(isHovered ? servicesStyles.iconHover : {}),
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

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ServicesSection />
    </div>
  );
};

export default App;
