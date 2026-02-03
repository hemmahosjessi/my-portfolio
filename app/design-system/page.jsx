import DocSection from "../components/DocSection/DocSection";
import ColorSwatch from "../components/ColorSwatch/ColorSwatch";
import styles from "./DesignSystem.module.css";
import TypoCloudItem from "../components/TypoCloudItem/TypoCloudItem";

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
        <div className={styles.typoGrid}>
          <TypoCloudItem tokenClass="display-l" name="Display-L" size="128 / 1.05" view="Aa"/>
          <TypoCloudItem tokenClass="display-m" name="Display-M" size="xx/xx" view="Bb"/>
          <TypoCloudItem tokenClass="display-s" name="Display-S" size="xx/xx" view="Cc"/>
          <TypoCloudItem tokenClass="heading-l" name="Heading-L" size="128 / 1.05" view="Dd"/>
          <TypoCloudItem tokenClass="heading-m" name="Heading-M" size="xx/xx" view="Ee"/>
          <TypoCloudItem tokenClass="heading-s" name="Heading-S" size="xx/xx" view="Ff"/>
          <TypoCloudItem tokenClass="title-l" name="Title-L" size="128 / 1.05" view="Gg"/>
          <TypoCloudItem tokenClass="title-m" name="Title-M" size="xx/xx" view="Hh"/>
          <TypoCloudItem tokenClass="title-s" name="Title-S" size="xx/xx" view="Jj"/>
          <TypoCloudItem tokenClass="body-l" name="Body-L" size="128 / 1.05" view="Kk"/>
          <TypoCloudItem tokenClass="body-m" name="Body-M" size="xx/xx" view="Mm"/>
          <TypoCloudItem tokenClass="body-s" name="Body-S" size="xx/xx" view="Nn"/>
        </div>
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


