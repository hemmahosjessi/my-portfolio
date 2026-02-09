"use client";
import { useEffect, useRef, useState } from "react";
import Bird from "./Bird";

const clamp01 = (n) => Math.min(1, Math.max(0, n));
const easeInOut = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function FlyingBird() {
  const [t, setT] = useState(0);     // 0..1 scrollprogress
  const [dir, setDir] = useState(1); // 1=scroll ner, -1=scroll upp
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );

      // riktning
      if (y > lastY.current) setDir(1);
      else if (y < lastY.current) setDir(-1);
      lastY.current = y;

      setT(clamp01(y / max));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth progress för position
  const te = easeInOut(t);

  // Håll den i toppen: vi styr bara små y-variationer
  const topOffsetPx = 56;     // bas-offset från toppen
  const waveAmpPx = 10;       // hur “vågig” den är i höjdled
  const waveFreq = 2.2;       // antal vågor under hela scrollen

  // Håll den alltid i viewporten horisontellt:
  // 8vw .. 82vw
  const xMin = 8;
  const xMax = 82;
  const x = xMin + te * (xMax - xMin);

  // Våg i toppen
  const y = topOffsetPx + Math.sin(te * Math.PI * 2 * waveFreq) * waveAmpPx;

  // Flip när man scrollar upp (näbben pekar “bakåt”)
  const flip = dir === -1 ? -1 : 1;

  // Lite “bank”/lutning som förstärker känslan av flyg
  const bankAmpDeg = 10;
  const bank =
    Math.cos(te * Math.PI * 2 * waveFreq) * bankAmpDeg * (dir === -1 ? -1 : 1);

  return (
    <Bird
      style={{
        transform: `translate3d(${x}vw, ${y}px, 0) scaleX(${flip}) rotate(${bank}deg)`,
      }}
    />
  );
}









// "use client";
// import { useEffect, useRef, useState } from "react";
// import Bird from "./Bird";

// const clamp01 = (n) => Math.min(1, Math.max(0, n));
// const easeInOut = (t) =>
//   t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// export default function FlyingBird() {
//   const [t, setT] = useState(0);
//   const [dir, setDir] = useState(1);
//   const lastY = useRef(0);

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY;
//       const max =
//         document.documentElement.scrollHeight - window.innerHeight;

//       const progress = clamp01(y / max);

//       // detect scroll direction
//       if (y > lastY.current) setDir(1);
//       else if (y < lastY.current) setDir(-1);

//       lastY.current = y;
//       setT(progress);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const te = easeInOut(t);

//   // 🔥 HÅLL DEN INOM SKÄRMEN HELA TIDEN
//   // start 10vw → slut 80vw
//   const x = 10 + te * 70;

//   // mjuk våg-rörelse
//   const y = 60 + Math.sin(te * Math.PI * 2) * 20;

//   // vänd fågeln beroende på scrollriktning
//   const flip = dir === -1 ? -1 : 1;

//   // liten lutning i flygriktning
//   const tilt = dir === -1 ? -8 : 8;

//   return (
//     <Bird
//       style={{
//         transform: `translate(${x}vw, ${y}px) scaleX(${flip}) rotate(${tilt}deg)`
//       }}
//     />
//   );
// }
