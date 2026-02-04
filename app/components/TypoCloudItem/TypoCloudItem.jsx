"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./TypoCloudItem.module.css";

// Enkel cache per tokenClass + viewport-bredd (så vi får rätt px när man resizar)
const metaCache = new Map();

function cacheKey(tokenClass) {
  // om du byter breakpoint/resize -> ny key
  // (du kan göra den mer avancerad, men detta räcker fint)
  return `${tokenClass}@${typeof window !== "undefined" ? window.innerWidth : 0}`;
}

export default function TypoCloudItem({ name, view = "Aa", tokenClass }) {
  const sampleRef = useRef(null);

  const [meta, setMeta] = useState({
    fontSizePx: null,
    lineHeightPx: null,
    lineHeightRatio: null,
    fontWeight: null,
  });

  // Stabil nyckel baserat på token + viewport
  const key = useMemo(() => {
    if (typeof window === "undefined") return `${tokenClass}@0`;
    return cacheKey(tokenClass);
  }, [tokenClass]);

  useEffect(() => {
    if (!sampleRef.current) return;

    // 1) kolla cache först
    const cached = metaCache.get(key);
    if (cached) {
      setMeta(cached);
      return;
    }

    // 2) annars mät via computed styles
    const measure = () => {
      const el = sampleRef.current;
      if (!el) return;

      const cs = window.getComputedStyle(el);

      const fontSize = parseFloat(cs.fontSize); // px
      // line-height kan vara "normal" eller px eller unitless – vi normaliserar till px
      let lineHeightPx = null;
      let lineHeightRatio = null;

      if (cs.lineHeight === "normal") {
        // normal är typ ~1.2 men varierar – vi approxar med 1.2
        lineHeightRatio = 1.2;
        lineHeightPx = fontSize * lineHeightRatio;
      } else {
        const lh = parseFloat(cs.lineHeight); // px om computed
        lineHeightPx = Number.isFinite(lh) ? lh : null;
        if (lineHeightPx && fontSize) {
          lineHeightRatio = lineHeightPx / fontSize;
        }
      }

      const fontWeight = cs.fontWeight;

      const next = {
        fontSizePx: fontSize ? Math.round(fontSize) : null,
        lineHeightPx: lineHeightPx ? Math.round(lineHeightPx) : null,
        lineHeightRatio: lineHeightRatio ? Number(lineHeightRatio.toFixed(2)) : null,
        fontWeight,
      };

      setMeta(next);
      metaCache.set(cacheKey(tokenClass), next);
    };

    measure();

    // 3) uppdatera vid resize (så clamp-värden blir rätt)
    const onResize = () => {
      // ny viewport => ny cache-key, så vi mäter igen
      const newKey = cacheKey(tokenClass);
      const cached2 = metaCache.get(newKey);
      if (cached2) setMeta(cached2);
      else measure();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [tokenClass, key]);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div>
          <div className={styles.fontName}>
            <p className="heading-s">{name}</p>
          </div>

          <div className={styles.meta}>
            <p>
              {/* Size / line-height:{" "} */}
              <span className={styles.value}>
                {meta.fontSizePx ? `${meta.fontSizePx}px` : "—"}/{""}
                {meta.lineHeightRatio ? meta.lineHeightRatio : "—"}
              </span>
            </p>

            <p>
              Weight <span className={styles.value}>{meta.fontWeight ?? "—"}</span>
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p ref={sampleRef} className={tokenClass}>
            {view}
          </p>
        </div>
      </div>
    </div>
  );
}
