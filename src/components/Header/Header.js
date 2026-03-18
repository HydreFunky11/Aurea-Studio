"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import ThemeToggle from "../UI/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Aurea <span className={styles.logoSub}>EVENT</span>
        </div>

        <button
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <a href="#home" className={styles.link} onClick={closeMenu}>
            Accueil
          </a>
          <a href="#services" className={styles.link} onClick={closeMenu}>
            Services
          </a>
          <a href="#talents" className={styles.link} onClick={closeMenu}>
            Talents
          </a>
          <a
            href="#contact"
            className={`${styles.link} ${styles.cta}`}
            onClick={closeMenu}
          >
            Contact
          </a>

          <div className={styles.toggleWrapper}>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
