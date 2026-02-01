import styles from "./CardGrid.module.css";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function CardGrid({
  title,
  label,
  children,
  variant = "default",
}) {
  return (
    <section className={styles.section}>
      {(title || label) && (
        <SectionHeader title={title} label={label} />
      )}

      <div className={`${styles.grid} ${styles[variant] ?? ""}`}>
        {children}
      </div>
    </section>
  );
}

