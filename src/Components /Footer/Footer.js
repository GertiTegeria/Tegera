import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'Company', href: '/company' },
    { label: 'Capabilities & solutions', href: '/capabilities' },
    { label: 'Digital products', href: '/products' },
    { label: 'Case studies', href: '/case-studies' }
  ];

  const resourceLinks = [
    { label: 'Partners', href: '/partners' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Explore our journey', href: '/journey' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const socialLinks = [
    { 
      name: 'Email', 
      href: 'mailto:contact@meantforgood.com',
      icon: '✉' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/meantforgood',
      icon: '💼' 
    },
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/meantforgood',
      icon: '📘' 
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>G</div>
            <h3 className={styles.logoText}>Meant for Good</h3>
          </div>
          
          <p className={styles.tagline}>
            Committed to implement good technology for everyone.
          </p>
          
          <div className={styles.socialSection}>
            <div className={styles.socialLabel}>Follow us</div>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Company</h4>
          <ul className={styles.linksList}>
            {companyLinks.map((link, index) => (
              <li key={index} className={styles.linkItem}>
                <a href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Resources</h4>
          <ul className={styles.linksList}>
            {resourceLinks.map((link, index) => (
              <li key={index} className={styles.linkItem}>
                <a href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        © {currentYear} Meant for Good. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;