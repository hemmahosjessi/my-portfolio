import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  label,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  children,
  ariaLabel,
}) {
  const classes = `${styles.button} ${styles[variant] ?? ""} ${className}`.trim();
  const content = children ?? label;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
