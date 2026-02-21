import styles from "./Hero.module.css";
import PageHeader from "../PageHeader/PageHeader";
import LogoCloud from "../LogoCloud/LogoCloud";

const logos = [
  { src: "/images/brand-seb.png", alt: "SEB", size: 48, href:"https://seb.io/"},
  { src: "/images/sthlms_stad_logo.png", alt: "Stockholms stad", size: 56 },
  { src: "/images/swe_life.png", alt: "Swedish Life Cycle Center", size: 80 },
  { src: "/images/fortum.jpg", alt: "Fortum", size: 64 },
  { src: "/images/fjallsakerhetsradet.jpg", alt: "Fjällsäkerhetsrådet", size: 80 },
  { src: "/images/libresse.png", alt: "Libresse", size: 96 },
  { src: "/images/naturvardsverket-logo.svg", alt: "Naturvårdsverket", size: 80 },
  { src: "/images/Stockholm_Exergi_logo.png", alt: "Stockholms Exergi", size: 80 },
  { src: "/images/telestaden.jpg", alt: "Telestaden", size: 40 },
];


export default function HeroDesign() {
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
        <div className={styles.wrapper}>
          <LogoCloud items={logos} />
        </div>
      </div>
    </section>
  );
}
