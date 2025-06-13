import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import arrowDownSvg from "../../assets/Group 8930.png";
import logoSvg from "../../assets/logo g-01 3.svg";

export default function Navbar() {


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


  return (
      <Navbar />
  )
}
