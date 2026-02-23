import styles from "./Service.module.css";

const servicesData = [
  {
    title: "Décoration",
    desc: "Le fil conducteur de votre événement. Scénographie immersive et sur-mesure.",
  },
  {
    title: "Musique",
    desc: "Des talents émergents pour une ambiance sonore acoustique ou électronique.",
  },
  {
    title: "Gastronomie",
    desc: "Traiteurs créatifs et mixologie pour éveiller les papilles.",
  },
  {
    title: "Arts Visuels",
    desc: "Photo, vidéo et performances artistiques pour immortaliser l'instant.",
  },
];

export default function Services() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Nos Services</h2>
      <p className={styles.sectionSubtitle}>
        Une expertise centralisée pour l'excellence
      </p>

      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
