// "use client";

// import styles from "./Hero.module.css";
// import HeroIntro from "./HeroIntro";
// import HeroAbout from "./HeroAbout";
// import DesignSection from "./DesignSection";




// export default function HeroStack() {
//     return (
//       <section className={styles.stack}>
//        <div className={styles.stackSection}>
//         <div className={styles.stackPanel1}>
//           <HeroIntro />
//         </div>
//       </div>
  
//       <div className={styles.stackSection}>
//         <div className={styles.stackPanel2}>
//           <HeroAbout />
//         </div>
//       </div>


//       <div className={styles.stackSection}>
//         <div className={styles.stackPanel3}>
//           <DesignSection />
//         </div>
//       </div>
//       </section>
//     );
//   }


"use client";

import styles from "./Hero.module.css";
import HeroIntro from "./HeroIntro";
import HeroAbout from "./HeroAbout";
import DesignSection from "./DesignSection";

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
        <DesignSection />
      </div>
    </section>
  );
}


  