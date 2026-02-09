import styles from "./ComponentPreview.module.css";

export default function PreviewTile({ children }) {
  return <div className={styles.tile}>{children}</div>;
}
