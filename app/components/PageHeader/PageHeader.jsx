// import styles from "./PageHeader.module.css";
// import ExpandableText from "../ExpandableText/ExpandableText.jsx";

// export default function PageHeader({ title, intro, body }) {
//   return (
//     <header className={styles.header}>
//       <h1 className="display-m">{title}</h1>
//       {intro && <p className="preamble-l">{intro}</p>}
//       {body && <p className="body-l">{body}</p>}
//       <ExpandableText>
//       <p className="body-m"></p>
//       </ExpandableText>
//     </header>
//   );
// }


// import ExpandableText from "../ExpandableText/ExpandableText";
// import styles from "./PageHeader.module.css";

// export default function PageHeader({ title, intro, body }) {
//   return (
//     <header className={styles.header}>
//       <h1 className="display-m">{title}</h1>
//       {intro && <p className="preamble-l">{intro}</p>}

//       {body && (
//         <ExpandableText summary="Read more" collapseLabel="Read less">
//           <div className={styles.body}>
//             {body}
//           </div>
//         </ExpandableText>
//       )}
//     </header>
//   );
// }


// import ExpandableText from "../ExpandableText/ExpandableText";
// import styles from "./PageHeader.module.css";

// const VARIANTS = {
//   hero: {
//     titleClass: "display-l",
//     preambleClass: "preamble-l",
//     titleIntroGap: "var(--space-6)",
//     stackGap: "var(--space-6)",
//   },
//   page: {
//     titleClass: "display-m",
//     preambleClass: "preamble-l",
//     titleIntroGap: "var(--space-4)",
//     stackGap: "var(--space-5)",
//   },
//   section: {
//     titleClass: "heading-l",
//     preambleClass: "preamble-l",
//     titleIntroGap: "var(--space-3)",
//     stackGap: "var(--space-4)",
//   },
// };

import ExpandableText from "../ExpandableText/ExpandableText";
import styles from "./PageHeader.module.css";

const VARIANTS = {
  page: {
    titleClass: "display-m",
    preambleClass: "preamble-l",
    titleGap: "var(--space-3)",
    stackGap: "var(--space-5)",
  },
  section: {
    titleClass: "heading-l",
    preambleClass: "preamble-l",
    titleGap: "var(--space-2)",
    stackGap: "var(--space-4)",
  },
  hero: {
    titleClass: "display-l",
    preambleClass: "preamble-l",
    titleGap: "var(--space-4)",
    stackGap: "var(--space-6)",
  },
};

export default function PageHeader({
  title,
  intro,
  body,
  expandableBody,
  variant = "page",
}) {
  const v = VARIANTS[variant] ?? VARIANTS.page;

  return (
    <header
      className={styles.header}
      style={{
        "--stack-gap": v.stackGap,
        "--title-gap": v.titleGap,
      }}
    >
      <div className={styles.titleWrap}>
        <h1 className={v.titleClass}>{title}</h1>
      </div>

      {intro && (
        <div className={styles.preambleWrap}>
          <p className={v.preambleClass}>{intro}</p>
        </div>
      )}

      {body && <div className={styles.bodyWrap}>{body}</div>}

      {expandableBody && (
        <ExpandableText summary="Read more" collapseLabel="Read less">
          <div className={styles.bodyWrap}>{expandableBody}</div>
        </ExpandableText>
      )}
    </header>
  );
}




