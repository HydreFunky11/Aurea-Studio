import Card from "../UI/Card";
import styles from "./Formules.module.css";

const formulesData = [
  {
    title: "Essentiel",
    subtitle: "Décoration basique",
    features: [
      "Ballons",
      "Guirlande simple",
      "Décor de table (vaisselle et nappage)",
    ],
    price: "à partir de 300€",
    accent: "coral",
  },
  {
    title: "Premium",
    features: [
      "Service des formules essentiel & classique",
      "Personnalisation XXL",
      "Mise en scène",
    ],
    price: "de 550€ à 750€",
    accent: "gold",
    featured: true,
  },
  {
    title: "Classique",
    features: [
      "Arche de ballon",
      "Personnalisation",
      "Éléments décoratifs et accessoires",
    ],
    price: "de 400€ à 530€",
    accent: "coral",
  },
];

export default function Formules() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.labelRow}>
          <span className={styles.labelLine}></span>
          <span className={styles.label}>Nos offres</span>
        </div>
        <h2 className={styles.sectionTitle}>Nos Formules</h2>
        <p className={styles.sectionSubtitle}>
          Des packs clés en main pour chaque type d&apos;événement
        </p>
      </div>

      <div className={styles.grid}>
        {formulesData.map((formule) => (
          <Card key={formule.title} {...formule} />
        ))}
      </div>
    </div>
  );
}
