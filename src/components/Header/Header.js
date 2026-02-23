import styles from "./Header.module.css";
import ThemeToggle from "../UI/ThemeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Aurea <span className={styles.logoSub}>STUDIO</span>
        </div>

        <nav className={styles.nav}>
          <a href="#home" className={styles.link}>
            Accueil
          </a>
          <a href="#services" className={styles.link}>
            Services
          </a>
          <a href="#talents" className={styles.link}>
            Talents
          </a>
          <a href="#contact" className={`${styles.link} ${styles.cta}`}>
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
