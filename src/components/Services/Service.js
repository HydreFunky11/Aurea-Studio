import styles from "./Service.module.css";

const servicesData = [
  {
    num: "01",
    title: "Décoration",
    desc: "Le fil conducteur de votre événement. Scénographie immersive et sur-mesure.",
    accent: "gold",
  },
  {
    num: "02",
    title: "Musique",
    desc: "Des talents émergents pour une ambiance sonore acoustique ou électronique.",
    accent: "coral",
  },
  {
    num: "03",
    title: "Gastronomie",
    desc: "Traiteurs créatifs et mixologie pour éveiller les papilles.",
    accent: "green",
  },
  {
    num: "04",
    title: "Arts Visuels",
    desc: "Photo, vidéo et performances artistiques pour immortaliser l'instant.",
    accent: "blue",
  },
];

export default function Services() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.labelRow}>
          <span className={styles.labelLine}></span>
          <span className={styles.label}>Ce que nous faisons</span>
        </div>
        <h2 className={styles.sectionTitle}>Nos Services</h2>
        <p className={styles.sectionSubtitle}>
          Une expertise centralisée pour l&apos;excellence
        </p>
      </div>

      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[`accent_${service.accent}`]}`}
          >
            <span className={styles.cardNum}>{service.num}</span>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
            <div className={styles.cardLine}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
