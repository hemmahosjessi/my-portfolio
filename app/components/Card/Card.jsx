import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({
  image,
  label,
  title,
  description,
  href,
  children,
}) {
  const Wrapper = href ? Link : "div";

  return (
    <article className={styles.card}>
      <Wrapper
        {...(href ? { href } : {})}
        className={styles.inner}
      >
        <div className={styles.mediaWrapper}>
          {image ? (
            <img className={styles.media} src={image} alt={title ?? ""} />
          ) : (
            <div className={styles.placeholder} />
          )}
        </div>

        <div className={styles.content}>
        {label && (<p className={`title-s ${styles.label}`}>{label}</p>)}
        {title && (<h3 className={`heading-s ${styles.title}`}>{title}</h3>)}
        {description && (<p className={`body-s ${styles.description}`}>{description}</p>)}
          {children}
        </div>
      </Wrapper>
    </article>
  );
}
