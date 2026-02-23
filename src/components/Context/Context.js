import styles from "./Context.module.css";

export default function Context() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Colonne visuelle (Titre + Décoration) */}
        <div className={styles.titleColumn}>
          <h2 className={styles.title}>Contexte</h2>
          <div className={styles.goldLine}></div>
        </div>

        {/* Colonne Texte */}
        <div className={styles.textColumn}>
          <p className={styles.intro}>
            Aujourd’hui, organiser un événement, que ce soit pour une école, une
            Start-up, une entreprise, voir même pour un particulier recherchant
            à créer un évènement à moindre coût, demande du temps et de
            l'énergie.
          </p>

          <p className={styles.subIntro}>
            Particulièrement pour un jeune qui souhaiterait révéler son
            potentiel et se faire connaître, la coordination de multiples
            prestataires (décorateur, photographe, traiteur, DJ, artistes...)
            exige de :
          </p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.bullet}></span>
              Rechercher les bons contacts (souvent sans réseau ni
              recommandations fiables).
            </li>
            <li className={styles.listItem}>
              <span className={styles.bullet}></span>
              Comparer les prix et la qualité (ce qui peut prendre énormément de
              temps).
            </li>
            <li className={styles.listItem}>
              <span className={styles.bullet}></span>
              Gérer la logistique (disponibilité, contrats, paiements,
              imprévus).
            </li>
          </ul>

          <div className={styles.resultBox}>
            <p className={styles.resultText}>
              <strong className={styles.goldText}>Résultat :</strong> beaucoup
              abandonnent ou dépensent bien plus que prévu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
