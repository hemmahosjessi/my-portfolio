import styles from "./SpacingRadiusPreview.module.css";
import Chip from "../Chip/Chip";

const RADII = [
  { name: "radius-s", value: "var(--radius-s)", tone: "neutral" },
  { name: "radius-m", value: "var(--radius-m)", tone: "brand" },
  { name: "radius-l", value: "var(--radius-l)", tone: "accent" },
  { name: "radius-full", value: "var(--radius-full)", tone: "neutral" },
];

const SPACES = ["--space-2", "--space-3", "--space-4", "--space-6", "--space-8"];

export default function SpacingRadiusPreview() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.radiusGrid}>
        {RADII.map((r) => (
          <div key={r.name} className={styles.radiusItem}>
            <div
              className={`${styles.shape} ${styles[r.tone]}`}
              style={{ borderRadius: r.value }}
            />
            <div className={styles.meta}>
              <Chip tone="neutral">{r.name}</Chip>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.spacingRow}>
        {SPACES.map((s) => (
          <Chip key={s} tone="neutral">
            {s.replace("--", "")}
          </Chip>
        ))}
      </div>
    </div>
  );
}
