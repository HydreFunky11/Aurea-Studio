"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./Home.module.css";

const images = ["/aurea1.webp", "/aurea2.webp", "/aurea3.webp"];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage, currentIndex]); // Adding currentIndex here will reset the interval on manual change

  return (
    <div className={styles.hero}>
      {/* Animated warm gradient orbs */}
      <div className={styles.orbContainer} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orbPurple}`}></div>
        <div className={`${styles.orb} ${styles.orbCoral}`}></div>
        <div className={`${styles.orb} ${styles.orbGold}`}></div>
      </div>

      {/* Decorative geometric accents */}
      <div className={styles.geoAccents} aria-hidden="true">
        <div className={`${styles.diamond} ${styles.diamond1}`}></div>
        <div className={`${styles.diamond} ${styles.diamond2}`}></div>
        <div className={`${styles.diamond} ${styles.diamond3}`}></div>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
      </div>

      {/* Grain overlay */}
      <div className={styles.grain} aria-hidden="true"></div>

      {/* Background large values */}
      <div className={styles.backgroundValues} aria-hidden="true">
        <span className={styles.bgValue}>Créativité</span>
        <span className={styles.bgValue}>Authenticité</span>
        <span className={styles.bgValue}>Impact</span>
      </div>

      <div className={styles.containerMain}>
        <div className={styles.visualSide}>
          <div className={styles.visualContent}>
            {/* Image placeholder with elegant styling */}
            <div className={styles.visualFrame}>
              <div className={styles.visualImagePlaceholder}>
                <div
                  className={styles.imageSlider}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Gold ${index + 1}`}
                      className={styles.carouselImage}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                className={`${styles.navArrow} ${styles.prevArrow}`}
                onClick={prevImage}
                aria-label="Image précédente"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                className={`${styles.navArrow} ${styles.nextArrow}`}
                onClick={nextImage}
                aria-label="Image suivante"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Indicators */}
              <div className={styles.carouselIndicators}>
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.indicator} ${currentIndex === index ? styles.activeIndicator : ""}`}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.tagline}>
            <span className={styles.taglineLine}></span>
            <span className={styles.taglineText}>Agence Événementielle</span>
            <span className={styles.taglineLine}></span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleAurea}>Gold</span>
            <span className={styles.titleEvent}>Event</span>
          </h1>

          <h2 className={styles.subtitle}>
            Révélateur de <span className={styles.goldText}>Talents</span>
            <br />
            <span className={styles.ampersand}>&</span> Créateur d&apos;Instants
          </h2>

          <p className={styles.description}>
            Une plateforme unique centralisant décoration, musique, gastronomie
            et arts visuels.
          </p>

          <div className={styles.values}>
            <span className={styles.value}>Créativité</span>
            <span className={styles.valueDot}></span>
            <span className={styles.value}>Authenticité</span>
            <span className={styles.valueDot}></span>
            <span className={styles.value}>Impact</span>
          </div>

          <a href="#services" className={styles.ctaButton}>
            <span className={styles.ctaText}>Découvrir nos services</span>
            <span className={styles.ctaArrow}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
      </div>
    </div>
  );
}
