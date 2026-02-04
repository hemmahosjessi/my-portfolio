"use client";

import styles from "./ExpandableText.module.css";

export default function ExpandableText({
    summary = "Read more",
    collapseLabel = "Read less",
    children,
  }) {
    return (
      <details className={styles.details}>
        <div className={styles.content}>{children}</div>
  
        <summary className={styles.summary}>
          <span className={styles.more}>{summary}</span>
          <span className={styles.less}>{collapseLabel}</span>
        </summary>
      </details>
    );
  }
