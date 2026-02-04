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


import ExpandableText from "../ExpandableText/ExpandableText";
import styles from "./PageHeader.module.css";

export default function PageHeader({
  title,
  intro,
  body,
  expandableBody,
}) {
  return (
    <header className={styles.header}>
      <h1 className="display-m">{title}</h1>

      {intro && <p className="preamble-l">{intro}</p>}

      {body && <div className={styles.body}>{body}</div>}

      {expandableBody && (
        <ExpandableText summary="Read more" collapseLabel="Read less">
          <div className={styles.body}>
            {expandableBody}
          </div>
        </ExpandableText>
      )}
    </header>
  );
}


