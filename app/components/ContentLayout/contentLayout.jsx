import styles from "./ContentLayout.module.css";

export default function ContentLayout({ children, size = "md" }) {
  return (
    <div className={`${styles.container} ${styles[size]}`}>
      {children}
    </div>
  );
}
