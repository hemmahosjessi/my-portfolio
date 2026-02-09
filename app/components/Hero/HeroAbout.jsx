import styles from "./Hero.module.css";
import Button from "../Button/Button";
import MediaCard from "../MediaCard/MediaCard";
import PageHeader from "../PageHeader/PageHeader";

export default function HeroAbout() {
  return (
    <section className={styles.aboutOuter}>
      
      <MediaCard
        src="/images/jes-heroimg.png"
        alt="Portrait"
        ratio="3 / 4"
        maxHeight="900px" />

      <div className={styles.aboutInner}>

      <p className={`preamble-l ${styles.eyebrow}`}>Hi! I’m Jessi</p>

        <PageHeader
          title="Designing systems. Building interfaces. Bridging both."
          intro="I'm a UI/UX designer with a long background in digital design. Design is where I’m most confident, but I’m equally curious about how things work under the hood. I enjoy working with frontend development and continuously aim to refine my coding skills to match my design practice."
          body=""
          titleSize="heading-xl" 
          variant="page" 
        />

        <div className={styles.aboutCta}>
          <Button label="Say hello" href="/contact" />
        </div>

      </div>
    </section>
  );
}
