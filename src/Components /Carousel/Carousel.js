import React, { useState, useEffect } from 'react'
import backgroundSvg from "../../assets/Rectangle 5369.png";
import arrowRightSvg from "../../assets/Arrow 2.png";
import BgCarousel from "../../assets/Carosel.png";

export default function Carousel() {

    const carouselStyles = {
        carousel: {
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          marginTop: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(27, 49, 94, 0.8)",
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
                  backgroundImage: `url(${BgCarousel})`,
                //   backgroundImage: `linear-gradient(135deg, rgba(27, 49, 94, 0.8) 0%, rgba(27, 49, 94, 0.9) 100%), url(${BgCarousel})`,
                  backgroundColor: "rgba(27, 49, 94, 0.8)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundBlendMode: "overlay",
                  

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

  return (
      <Carousel />
  )
}
