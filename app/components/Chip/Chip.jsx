import styles from "./Chip.module.css";

export default function Chip({
  children,
  tone = "neutral", // neutral | accent | brand | muted
  className = "",
}) {
  const toneClass = styles[tone] ?? styles.neutral;

  return (
    <span className={`${styles.chip} ${toneClass} ${className}`.trim()}>
      {children}
    </span>
  );
}
