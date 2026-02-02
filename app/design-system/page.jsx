import DocSection from "../components/DocSection/DocSection";
import ColorSwatch from "../components/ColorSwatch/ColorSwatch";
import styles from "./DesignSystem.module.css";

export default function DesignSystemPage() {
  return (
    <div className={styles.designSystemPage}>
      <DocSection
        kicker="Tokens"
        title="Colors"
        body="A palette built from neutrals, brand greens, and a strong accent yellow. Tokens are split into base colors and semantic roles so the UI stays consistent across light and dark mode."
      >
        <div className={styles.swatchGrid}>
          <ColorSwatch name="Bg" hex="#FFFFFF" role="Base" />

          <ColorSwatch name="Surface" hex="#FCFCF8" role="Cards" />
          <ColorSwatch name="Surface-2" hex="#f7f7f0" role="OnCards" />

          <ColorSwatch name="Brand" hex="#0F3D2E" role="BgHighlight" />
          <ColorSwatch name="Accent" hex="#FFD400" role="Primary CTA" />

          <ColorSwatch name="Text" hex="#111312" role="Primary text" />
          <ColorSwatch name="Text-muted" hex="#5c635f" role="Muted text" />
          <ColorSwatch name="Text-highlight" hex="#29964D" role="Higlighted text" />

          <ColorSwatch name="ink" hex="#111111" role="Icons" />
          <ColorSwatch name="ink" hex="#2a2a2a" role="Icons muted" />
        </div>
      </DocSection>

      <DocSection
        kicker="Tokens"
        title="Typography"
        body="Intro on typography."
      >
      </DocSection>


      <DocSection
        kicker="Tokens"
        title="Spacings & radius"
        body="Intro on spacings & radius."
      >
      </DocSection>
    </div>
  );
}


