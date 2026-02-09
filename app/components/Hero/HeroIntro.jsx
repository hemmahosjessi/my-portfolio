// "use client";

// import styles from "./Hero.module.css";


// export default function HeroIntro() {
//     return (
//       <section className={styles.stack}>
      
//         <div className={styles.introSection}>
//             <h1 className={`display-l ${styles.heroTitle}`}>
//                 <span className={styles.line}>Not just pretty.</span>
//                 <span className={styles.line}>Built to work.</span>
//                 <span className={styles.line}>Visual design + Frontend 
//                 <span className={styles.highlight}>= TRUE</span>
//                 </span>
//             </h1>
//             </div>
  
//             <div className={styles.scrollCta}>
//               <button
//                 type="button"
//                 className={styles.scrollButton}
//                 onClick={() =>
//                   document
//                     .getElementById("hero-about")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//               >
//                 Scroll for more
//               </button>
//             </div>

//       </section>
//     );
//   }


"use client";

import styles from "./Hero.module.css";

export default function HeroIntro() {
  return (
    <div className={styles.introSection}>
      <h1 className={`display-l ${styles.heroTitle}`}>
        <span className={styles.line}>Not just pretty.</span>
        <span className={styles.line}>Built to work.</span>
        <span className={styles.line}>
          Visual design + Frontend
          <span className={styles.highlight}>= TRUE</span>
        </span>
      </h1>

      <div className={styles.scrollCta}>
        <button
          type="button"
          className={styles.scrollButton}
          onClick={() =>
            document.getElementById("hero-about")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Scroll for more
        </button>
      </div>
    </div>
  );
}

