import styles from "./CardGrid.module.css";
import HomeSectionHeader from "../HomeSectionHeader/HomeSectionHeader";

export default function CardGrid({
  title,
  label,
  children,
  variant = "default",
}) {
  return (
    <section className={styles.section}>
      {(title || label) && (
        <HomeSectionHeader title={title} label={label} />
      )}

      <div className={`${styles.grid} ${styles[variant] ?? ""}`}>
        {children}
      </div>
    </section>
  );
}

