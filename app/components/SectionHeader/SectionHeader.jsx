import styles from "./SectionHeader.module.css";

export default function SectionHeader({ label, title }) {
  return (
    <header className={styles.header}>
      {label && <p className={`title-m ${styles.label}`}>{label}</p>}
      <h2 className={`heading-l ${styles.title}`}>{title}</h2>
    </header>
  );
}
