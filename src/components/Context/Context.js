import styles from "./Context.module.css";

export default function Context() {
  return (
    <section className={styles.wrapper}>
      {/* Background watermark */}
      <div className={styles.watermark} aria-hidden="true">
        Gold
      </div>

      <div className={styles.container}>
        {/* Left - Brand intro */}
        <div className={styles.introColumn}>
          <div className={styles.labelRow}>
            <span className={styles.labelLine}></span>
            <span className={styles.label}>Notre identité</span>
          </div>
          <h2 className={styles.title}>Contexte</h2>
          <div className={styles.goldLine}></div>
          {/* <p className={styles.etymology}>
            &laquo;&nbsp;Auréa&nbsp;&raquo; vient du latin <em>aureus/aurea</em>,
            signifiant &laquo;&nbsp;doré&nbsp;&raquo;, &laquo;&nbsp;en or&nbsp;&raquo;
            ou &laquo;&nbsp;précieux et lumineux&nbsp;&raquo;.
          </p>*/}
        </div>

        {/* Right - Concept, Mission, Contexte */}
        <div className={styles.contentColumn}>
          {/* Concept */}
          <div className={styles.block}>
            <div className={styles.blockHeader}>
              <span className={styles.blockNum}>01</span>
              <h3 className={styles.blockTitle}>Concept</h3>
            </div>
            <p className={styles.blockText}>
              Notre concept d&apos;agence événementielle simplifie tout : une
              seule plateforme qui centralise ces services pour les particuliers
              et professionnels tout en révélant de jeunes talents où la
              décoration est le fil conducteur accompagné de chaque prestation :
              musique, gastronomie, photo, arts visuels.
            </p>
          </div>

          {/* Mission */}
          <div className={styles.block}>
            <div className={styles.blockHeader}>
              <span className={styles.blockNum}>02</span>
              <h3 className={styles.blockTitle}>Mission</h3>
            </div>
            <p className={styles.blockText}>
              Créer un événement clé en main, original, personnalisé et
              mémorable tout en offrant aux plus jeunes talents une vraie scène
              de visibilité et devenir acteur de son développement et talents
              artistique.
            </p>
          </div>

          {/* Le problème */}
          <div className={styles.block}>
            <div className={styles.blockHeader}>
              <span className={styles.blockNum}>03</span>
              <h3 className={styles.blockTitle}>Le problème</h3>
            </div>
            <p className={styles.blockText}>
              Aujourd&apos;hui, organiser un événement demande du temps et de
              l&apos;énergie. La coordination de multiples prestataires exige de
              :
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Rechercher les bons contacts, souvent sans réseau ni
                  recommandations fiables.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Comparer les prix et la qualité, ce qui peut prendre
                  énormément de temps.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Gérer la logistique : disponibilité, contrats, paiements,
                  imprévus.
                </span>
              </li>
            </ul>
            <div className={styles.resultBox}>
              <p className={styles.resultText}>
                <strong className={styles.resultHighlight}>Résultat :</strong>{" "}
                beaucoup abandonnent ou dépensent bien plus que prévu.
              </p>
            </div>
          </div>

          {/* Valeurs */}
          <div className={styles.valuesRow}>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>✦</span>
              <span className={styles.valueLabel}>Créativité</span>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>◈</span>
              <span className={styles.valueLabel}>Authenticité</span>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>◉</span>
              <span className={styles.valueLabel}>Impact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
