import styles from "./PageHeader.module.css";

export default function PageHeader({ title, intro }) {
  return (
    <header className={styles.header}>
      <h1 className="display-s">{title}</h1>
      {intro && <p className="body-m">{intro}</p>}
    </header>
  );
}
