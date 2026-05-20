import styles from "./Card.module.css";

export default function Card({
  title,
  subtitle,
  features = [],
  price,
  featured = false,
  accent = "gold",
  children,
}) {
  const classNames = [
    styles.card,
    styles[`accent_${accent}`],
    featured && styles.featured,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classNames}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>

      {features.length > 0 && (
        <ul className={styles.list}>
          {features.map((item) => (
            <li key={item} className={styles.listItem}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {children}

      {price && (
        <footer className={styles.priceBar}>
          <span className={styles.price}>{price}</span>
        </footer>
      )}
    </article>
  );
}
