import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Créons l'exceptionnel</h2>
        <p className={styles.text}>
          Particuliers ou Professionnels, parlez-nous de votre projet.
        </p>

        <form className={styles.form}>
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
          <div className={styles.group}>
            <textarea
              placeholder="Votre message"
              className={styles.textarea}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
  );
}
