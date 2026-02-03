import styles from "./TypoCloudItem.module.css";


export default function TypoCloudItem({ name, size, view, tokenClass }) {
    return (
      <div className={styles.card}>
            <div className={styles.meta}>
            {<p className="title-m">{name}</p>}
            {<p className="title-m">{size}</p>}
        </div>
        <div className={styles.view}>
            {<p className={tokenClass}>{view}</p>}
        </div>
      </div>
    );
  }


