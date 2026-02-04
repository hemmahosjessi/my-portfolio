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
        preamble="This is a preamble"
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
        preamble="Typography plays a central role in shaping both the personality and usability of a design system. 
              Beyond aesthetics, typography establishes hierarchy, rhythm, and clarity. Type tokens ensure consistency and clarity, while allowing layouts and components to scale gracefully across different contexts and screen sizes."
        body
        sections={[
          {
            title: "Raleway",
            body: "Raleway is used as the primary typeface across the interface. It’s a geometric sans serif with a soft, contemporary character that works well for both expressive display sizes and readable body text. The wide proportions and open shapes give headings a calm confidence, while the lighter weights help larger text feel airy rather than heavy. At smaller sizes, the regular and medium weights maintain good clarity without becoming rigid or overly technical. Raleway supports a broad range of typographic roles, from large display moments to subtle UI text, making it a solid backbone for a system that aims to feel modern, human, and considered."
          },
          {
            title: "Monospace",
            body: "A monospace typeface is used selectively for system-oriented content such as tokens, values, metadata, and technical labels. By introducing a monospaced font alongside Raleway, the system creates a clear visual distinction between content and structure. This contrast helps communicate hierarchy and intent: prose and interface copy feel warm and expressive, while system information feels precise and functional. The monospace font blends in quietly without drawing attention, reinforcing the idea that it supports the system rather than defining it.",
          },
        ]}
  
      >
        <div className={styles.typoGrid}>
          <TypoCloudItem tokenClass="display-l" name="Display-L" size="128 / 1.05" fontWeight="Weight - 500" view="Aa"/>
          <TypoCloudItem tokenClass="display-m" name="Display-M" size="xx/xx" fontWeight="Weight - 500" view="Bb"/>
          <TypoCloudItem tokenClass="display-s" name="Display-S" size="xx/xx" fontWeight="Weight - 500" view="Cc"/>
          <TypoCloudItem tokenClass="heading-l" name="Heading-L" size="128 / 1.05" fontWeight="Weight - 500" view="Dd"/>
          <TypoCloudItem tokenClass="heading-m" name="Heading-M" size="xx/xx" fontWeight="Weight - 500" view="Ee"/>
          <TypoCloudItem tokenClass="heading-s" name="Heading-S" size="xx/xx" fontWeight="Weight - 500" view="Ff"/>
          <TypoCloudItem tokenClass="title-l" name="Title-L" size="128 / 1.05" fontWeight="Weight - 500" view="Gg"/>
          <TypoCloudItem tokenClass="title-m" name="Title-M" size="xx/xx" fontWeight="Weight - 500" view="Hh"/>
          <TypoCloudItem tokenClass="title-s" name="Title-S" size="xx/xx" fontWeight="Weight - 500" view="Jj"/>
          <TypoCloudItem tokenClass="body-l" name="Body-L" size="128 / 1.05" fontWeight="Weight - 500" view="Kk"/>
          <TypoCloudItem tokenClass="body-m" name="Body-M" size="xx/xx" fontWeight="Weight - 500" view="Mm"/>
          <TypoCloudItem tokenClass="body-s" name="Body-S" size="xx/xx" fontWeight="Weight - 500" view="Nn"/>
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


