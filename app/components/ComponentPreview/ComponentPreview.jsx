// import styles from "./ComponentPreview.module.css";

// export default function ComponentPreview({ title = "Component previews", children }) {
//   return (
//     <div className={styles.preview}>
//       <div className={styles.header}>
//         <p className="title-s">{title}</p>
//       </div>

//       <div className={styles.sections}>
//         {children}
//       </div>
//     </div>
//   );
// }


import styles from "./ComponentPreview.module.css";

export default function ComponentPreview({ children }) {
  return <div className={styles.grid}>{children}</div>;
}


