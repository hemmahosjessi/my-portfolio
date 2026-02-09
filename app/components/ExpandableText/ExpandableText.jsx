"use client";

import styles from "./ExpandableText.module.css";

export default function ExpandableText({
  summary = "Read more",
  collapseLabel = "Read less",
  children,
}) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>
        <span className={styles.more}>{summary}</span>
        <span className={styles.less}>{collapseLabel}</span>
      </summary>

      {/* wrapper för smooth expand */}
      <div className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </details>
  );
}
