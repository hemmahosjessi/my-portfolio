import styles from "./Hero.module.css";
import PageHeader from "../PageHeader/PageHeader";

const logos = [
  { src: "/logos/seb.svg", alt: "SEB" },
  { src: "/logos/klarna.svg", alt: "Klarna" },
  { src: "/logos/spotify.svg", alt: "Spotify" },
  { src: "/logos/hm.svg", alt: "H&M" },
  { src: "/logos/volvo.svg", alt: "Volvo" },
  { src: "/logos/ericsson.svg", alt: "Ericsson" },
];

export default function DesignSection() {
  return (
    <section className={styles.panel3}>
      <div className={styles.clientsOuter}>
        <div className={styles.clientsLeft}>
          <p className={`preamble-l ${styles.eyebrow}`}>Selected clients</p>

          <PageHeader
            title="I build systems that ship."
            intro="Design systems, UI and frontend collaboration — with a focus on accessibility and craft."
            body="I’ve worked with teams across banking and product orgs, supporting everything from early concepts to production-ready components."
            titleSize="heading-xl"
            variant="page"
          />
        </div>

        <div className={styles.clientsRight}>
          <div className={styles.logoCloud}>
            {logos.map((l) => (
              <div key={l.alt} className={styles.logoItem}>
                <img src={l.src} alt={l.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
