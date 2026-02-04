import styles from "./TypoCloudItem.module.css";


export default function TypoCloudItem({ name, size, view, tokenClass, fontWeight }) {
    return (
      <div className={styles.card}>

        <div className={styles.content}>
            <div>
                <div className={styles.fontName}>
                    {<p>{name}</p>}
                </div>
                <div className={styles.meta}>
                    {<p>{size}</p>}
                    {<p>{fontWeight}</p>}
                </div>
            </div>

            <div className={styles.bottom}>
                {<p className={tokenClass}>{view}</p>}
            </div>
        </div>

      </div>
    );
  }





