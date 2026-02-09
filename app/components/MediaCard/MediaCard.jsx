import styles from "./MediaCard.module.css";

export default function MediaCard({
  src,
  alt = "",
  ratio = "3 / 4",
  maxHeight,     
  radius = "var(--radius-2xl)",
  className = "",
}) {
  return (
    <div
      className={`${styles.mediaCard} ${className}`.trim()}
      style={{
        "--media-ratio": ratio,
        "--media-max-h": maxHeight ?? "none",
        "--media-radius": radius,
      }}
    >
      <img className={styles.mediaImg} src={src} alt={alt} />
    </div>
  );
}

