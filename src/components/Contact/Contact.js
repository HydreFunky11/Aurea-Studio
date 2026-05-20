"use client";
import { useState } from "react";
import { Button, InputText, PhoneNumberInput } from "vega-react-components";
import styles from "./Contact.module.css";

export default function Contact() {
  const [phone, setPhone] = useState("");

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
          {/* Ligne 1 : Nom et Email */}
          <div className={styles.row}>
            <div className={styles.group}>
              <InputText
                type="text"
                placeholder="Nom complet"
                className={styles.input}
                required
                fullWidth
              />
            </div>
            <div className={styles.group}>
              <InputText
                type="email"
                placeholder="Email"
                className={styles.input}
                required
                fullWidth
              />
            </div>
          </div>

          {/* Ligne 2 : Téléphone et Type d'événement */}
          <div className={styles.row}>
            <div className={styles.group}>
              <PhoneNumberInput
                placeholder="Téléphone"
                className={styles.input}
                value={phone}
                onChange={setPhone}
                defaultCountry="FR"
                fullWidth
              />
            </div>
            <div className={styles.group}>
              <select className={styles.select} required defaultValue="">
                <option value="" disabled>Type d&apos;événement</option>
                <option value="mariage">Mariage</option>
                <option value="corporate">Entreprise / Séminaire</option>
                <option value="anniversaire">Anniversaire / Privé</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          {/* Ligne 3 : Date de l'événement */}
          <div className={styles.group}>
            <div className={styles.dateLabel}>Date souhaitée de l&apos;événement</div>
            <InputText
              type="date"
              className={styles.input}
              required
              fullWidth
            />
          </div>


          {/* Message */}
          <div className={styles.group}>
            <textarea
              placeholder="Votre message (détails du projet, lieu, nombre d'invités...)"
              className={styles.textarea}
              rows="5"
              required
            ></textarea>
          </div>

          <Button type="submit" className={styles.button}>
            <span>Envoyer la demande</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </Button>
        </form>
      </div>
    </div>
  );
}
