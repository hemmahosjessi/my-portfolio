import styles from "./DocSection.module.css";

export default function DocsSection({
    kicker,
    title,
    preamble,
    body,
    sections = [], // <— array av { title, body }
    children,

}) {
    return (
        <section className={styles.section}>
          <div className={styles.left}>
            {kicker && <p className="title-m">{kicker}</p>}
            {title && <h2 className="display-m">{title}</h2>}
            {preamble && <p className="preamble-l">{preamble}</p>}
            {body && <p className="body-m">{body}</p>}
    
            {sections.length > 0 && (
              <div className={styles.subSections}>
                {sections.map((s, i) => (
                  <div key={i} className={styles.subSection}>
                    {s.title && <h3 className="heading-l">{s.title}</h3>}
                    {s.body && <p className="body-m">{s.body}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

      <div className={styles.right}>
        {children}
      </div>
    </section>
  );
}
