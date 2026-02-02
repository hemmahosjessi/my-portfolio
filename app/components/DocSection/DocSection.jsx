import styles from "./DocSection.module.css";

export default function DocsSection({
  title,
  body,
  kicker,
  children,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        {kicker && <p className="title-m">{kicker}</p>}
        <h2 className="display-m">{title}</h2>
        {body && <p className="body-m">{body}</p>}
      </div>

      <div className={styles.right}>
        {children}
      </div>
    </section>
  );
}
