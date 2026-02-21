
"use client";

import styles from "./Hero.module.css";
import HeroIntro from "./HeroIntro";
import HeroAbout from "./HeroAbout";
import HeroDesign from "./HeroDesign";

export default function HeroStack() {
  return (
    <section className={styles.stack}>
      <div className={`${styles.panel} ${styles.panel1}`}>
        <HeroIntro />
      </div>

      <div id="hero-about" className={`${styles.panel} ${styles.panel2}`}>
        <HeroAbout />
      </div>

      <div className={`${styles.panel} ${styles.panel3}`}>
        <HeroDesign />
      </div>
    </section>
  );
}


  