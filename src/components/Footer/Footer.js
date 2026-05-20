"use client";

import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Decorative grain and orbs like in Home */}
      <div className={styles.grain} aria-hidden="true"></div>

      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              Gold <span className={styles.logoSub}>EVENT</span>
            </div>
            <p className={styles.brandDesc}>
              Révélateur de talents et créateur d&apos;instants
              d&apos;exception. Une plateforme unique centralisant
              l&apos;excellence événementielle.
            </p>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <nav className={styles.footerNav}>
              <Link href="#home" className={styles.footerLink}>
                Accueil
              </Link>
              <Link href="#services" className={styles.footerLink}>
                Services
              </Link>
              <Link href="#talents" className={styles.footerLink}>
                Talents
              </Link>
              <Link href="#contact" className={styles.footerLink}>
                Contact
              </Link>
            </nav>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.footerList}>
              <li className={styles.listItem}>Décoration</li>
              <li className={styles.listItem}>Musique</li>
              <li className={styles.listItem}>Gastronomie</li>
              <li className={styles.listItem}>Arts Visuels</li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Suivez-nous</h4>
            <div className={styles.socials}>
              <Link
                href="#"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            &copy; {currentYear} Gold Event. Tous droits réservés.
          </div>

          <div className={styles.poweredBy}>
            <span>Powered by</span>
            <Link
              href="https://www.npmjs.com/package/vega-react-components"
              target="_blank"
              className={styles.vegaLink}
            >
              <span className={styles.vegaText}>Vega Components</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.vegaLogo}
              >
                <rect width="100" height="100" rx="20" fill="black" />
                <path
                  d="M45 80C45 77.2386 47.2386 75 50 75C52.7614 75 55 77.2386 55 80C55 82.7614 52.7614 85 50 85C47.2386 85 45 82.7614 45 80Z"
                  fill="#fff"
                />
                <path
                  d="M35 65C35 62.2386 37.2386 60 40 60C42.7614 60 45 62.2386 45 65V70C45 72.7614 42.7614 75 40 75C37.2386 75 35 72.7614 35 70V65Z"
                  fill="#fff"
                />
                <path
                  d="M55 53C55 50.2386 57.2386 48 60 48C62.7614 48 65 50.2386 65 53V70C65 72.7614 62.7614 75 60 75C57.2386 75 55 72.7614 55 70V53Z"
                  fill="#fff"
                />
                <path
                  d="M65 48C67.7614 48 70 50.2386 70 53C70 55.7614 67.7614 58 65 58L60 58C57.2386 58 55 55.7614 55 53C55 50.2386 57.2386 48 60 48H65Z"
                  fill="#fff"
                />
                <path
                  d="M80 38C82.7614 38 85 40.2386 85 43C85 45.7614 82.7614 48 80 48H75C72.2386 48 70 45.7614 70 43C70 40.2386 72.2386 38 75 38L80 38Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
