import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Aurea Studio</h1>
        <h2 className={styles.subtitle}>
          Révélateur de <span className={styles.goldText}>Talents</span> &
          Créateur d'Instants
        </h2>
        <p className={styles.description}>
          Une plateforme unique centralisant décoration, musique, gastronomie et
          arts visuels.
        </p>
        <a href="#services" className={styles.ctaButton}>
          Découvrir nos services
        </a>
      </div>
    </div>
  );
}
