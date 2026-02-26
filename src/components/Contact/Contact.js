import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      {/* Decorative gradient line at top */}
      <div className={styles.topLine} aria-hidden="true"></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.labelRow}>
            <span className={styles.labelLine}></span>
            <span className={styles.label}>Parlons de votre projet</span>
            <span className={styles.labelLine}></span>
          </div>
          <h2 className={styles.title}>Créons l&apos;exceptionnel</h2>
          <p className={styles.text}>
            Particuliers ou Professionnels, parlez-nous de votre projet.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.group}>
              <input
                type="text"
                placeholder="Nom complet"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.group}>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.group}>
            <textarea
              placeholder="Votre message"
              className={styles.textarea}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            <span>Envoyer la demande</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
