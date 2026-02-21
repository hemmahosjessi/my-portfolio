import styles from "./LogoCloud.module.css";

export default function LogoCloud({ items = [], ariaLabel = "Logotyper" }) {
  return (
    <section aria-label={ariaLabel}>
      <ul className={styles.logoCloud} role="list">
        {items.map((item, i) => {
          const imgStyle =
            item.size
              ? { ["--logoHItem"]: typeof item.size === "number" ? `${item.size}px` : item.size }
              : undefined;

          const content = (
            <img
              className={styles.logoCloud__img}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              style={imgStyle}
            />
          );

          return (
            <li className={styles.logoCloud__item} key={item.key ?? `${item.alt}-${i}`}>
              {item.href ? (
                <a
                  className={styles.logoCloud__link}
                  href={item.href}
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noreferrer noopener" : undefined}
                  aria-label={item.ariaLabel ?? item.alt}
                >
                  {content}
                </a>
              ) : (
                <div className={styles.logoCloud__link}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}