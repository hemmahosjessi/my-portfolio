import styles from "./ColorSwatch.module.css";

export default function ColorSwatch({ name, hex, role }) {
  return (
    <div className={styles.card}>
      <div className={styles.swatch} style={{ background: hex }} />
      <div className={styles.meta}>
        <p className="title-s">{name}</p>
        <p className={styles.hex}>{hex}</p>
        {role && <p className="body-s" style={{ color: "var(--text-muted)" }}>{role}</p>}
      </div>
    </div>
  );
}
