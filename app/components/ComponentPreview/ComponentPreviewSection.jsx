import styles from "./ComponentPreview.module.css";

export default function ComponentPreviewSection({ title, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className="title-m">{title}</p>
      </div>

      <div className={styles.sectionBody}>
        {children}
      </div>
    </section>
  );
}
