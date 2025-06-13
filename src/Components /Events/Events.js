import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Events.module.css';
import monitorSvg from "../../assets/getInTouchImage.png";

const EventsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "How VR and AR are supporting commun...",
      description: "The reality we are currently living in seems quite simulated itself. Society as we know it, has been reshaped and...",
      image: monitorSvg
    },
    {
      id: 2,
      title: "How VR and AR are supporting commun...",
      description: "The reality we are currently living in seems quite simulated itself. Society as we know it, has been reshaped and...",
      image: monitorSvg
    },
    {
      id: 3,
      title: "How VR and AR are supporting commun...",
      description: "The reality we are currently living in seems quite simulated itself. Society as we know it, has been reshaped and...",
      image: monitorSvg 
    }
  ];

  return (
    <section className={styles.eventsSection}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Latest Events & News
        </h2>
        <button className={styles.viewAllBtn}>
          View all articles
          <ArrowRight size={20} />
        </button>
      </div>

      {/* News Grid */}
      <div className={styles.newsGrid}>
        {newsItems.map((item) => (
          <article key={item.id} className={styles.newsCard}>
            {/* Image Container */}
           <img src={item.image} alt={item.title}  className={styles.image} />    

            {/* Content */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                {item.title}
              </h3>
              <p className={styles.cardDescription}>
                {item.description}
              </p>
              <button className={styles.readMoreBtn}>
                Read more
                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;