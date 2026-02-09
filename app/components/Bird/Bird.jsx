import styles from "./Bird.module.css";

export default function Bird({ style, className = "", title = "Bird" }) {
  return (
    <div
      className={`${styles.bird} ${className}`}
      style={style}
      role="img"
      aria-label={title}
    >
      <div className={styles.backWing} />

      <div className={styles.body}>
        <div className={styles.eye} />
      </div>

      <div className={styles.wing} />
      <div className={styles.beak} />

      <div className={styles.feet}>
        <span className={styles.foot} />
        <span className={styles.foot} />
      </div>
    </div>
  );
}
