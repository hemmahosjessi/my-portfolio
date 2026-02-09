import DocSection from "../components/DocSection/DocSection";
import ColorSwatch from "../components/ColorSwatch/ColorSwatch";
import styles from "./DesignSystem.module.css";
import TypoCloudItem from "../components/TypoCloudItem/TypoCloudItem";
import ComponentPreview from "../components/ComponentPreview/ComponentPreview";
import Button from "../components/Button/Button";
import ThemeToggle from "../components/ThemeToggle";
import Card from "../components/Card/Card";
import PageHeader from "../components/PageHeader/PageHeader";
import SpacingRadiusPreview from "../components/SpacingRadiusPreview/SpacingRadiusPreview";
import PreviewTile from "../components/ComponentPreview/PreViewTile";



export default function DesignSystemPage() {
  return (
    <div className={styles.designSystemPage}>

<div className="PageHeaderSection">
      <PageHeader
      title="The great value of a good design system"
      intro="A design system is a shared foundation of principles, tokens, and reusable components that helps teams design and build consistent, high-quality interfaces, faster and with more confidence."
      body={
        <p className="body-m">
          This design system documents the foundations and building blocks
          used across the site, including color, typography, spacing, and
          reusable components. By centralizing decisions and patterns, a design 
          system reduces friction in everyday work. Teams spend less time debating 
          basics or rebuilding the same solutions, and more time focusing on real user problems.
        </p>
      }
      expandableBody={
        <>
          <p className="body-m">  This leads to more consistent experiences across products, platforms, and touchpoints—strengthening both usability and brand identity. 
          Design systems also help organizations move faster and stay aligned as they grow. When new features, teams, or markets are added, the system provides a stable framework to build on. Changes can be made in one place and scale across the product, making the system easier to maintain and adapt over time. 
          Ultimately, a design system is not just a visual toolkit—it’s a collaboration tool. It connects design, development, and product around shared standards, enabling better decisions, smoother workflows, and a more resilient product ecosystem.
          </p>
        </>
      }
      />
  </div>

      <DocSection
        kicker="Tokens"
        title="Colors"
        preamble="Colors in the design system are defined as tokens rather than fixed hex values. Each token represents a single source of truth and is mapped to a specific hex value, which can change depending on context, such as light or dark mode. By referencing tokens instead of raw colors, the interface stays flexible, consistent, and easier to maintain as the system evolves."
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
        <TypoCloudItem tokenClass="display-l" name="Display-L" view="Aa"/>
        <TypoCloudItem tokenClass="display-m" name="Display-M" view="Aa"/>
        <TypoCloudItem tokenClass="display-s" name="Display-S" view="Aa"/>

        <TypoCloudItem tokenClass="heading-l" name="Heading-L" view="Aa"/>
        <TypoCloudItem tokenClass="heading-m" name="Heading-M" view="Aa"/>
        <TypoCloudItem tokenClass="heading-s" name="Heading-S" view="Aa"/>

        <TypoCloudItem tokenClass="title-l" name="Title-L" view="Aa"/>
        <TypoCloudItem tokenClass="title-m" name="Title-M" view="Aa"/>
        <TypoCloudItem tokenClass="title-s" name="Title-S" view="Aa"/>

        <TypoCloudItem tokenClass="preamble-l" name="Preamble-L" view="Aa"/>
        <TypoCloudItem tokenClass="preamble-m" name="Preamble-L" view="Aa"/>
        <TypoCloudItem tokenClass="preamble-s" name="Preamble-L" view="Aa"/>

        <TypoCloudItem tokenClass="body-l" name="Body-L" view="Aa"/>
        <TypoCloudItem tokenClass="body-m" name="Body-M" view="Aa"/>
        <TypoCloudItem tokenClass="body-s" name="Body-S" view="Aa"/>

        </div>
      </DocSection>


      <DocSection
        kicker="Tokens"
        title="Spacing & radius"
        preamble="Spacing and radius tokens define the rhythm and softness of the interface.
                  By using consistent increments and reusable radii, layouts feel cohesive and components stay visually aligned as the system grows."
        body="Spacing tokens create a shared scale for padding, gaps, and layout structure. Instead of choosing arbitrary values per component, the system uses a predictable set of steps—making the UI easier to maintain and easier to adjust globally over time.
              Radius tokens define corner rounding across components. A small set of radii helps the interface feel consistent, while still allowing variation between subtle UI elements, larger surfaces, and fully rounded controls. Together, spacing and radius support a system that feels intentional, flexible, and scalable."
      >
        <SpacingRadiusPreview />
      </DocSection>


      <DocSection
        kicker="Components"
        title="Reusable components"
        preamble="Reusable components are modular building blocks designed to be used across multiple parts of the product. Each component solves a specific UI need and is built to be flexible enough to work in different contexts without being recreated every time."
      
        sections={[
          {
            title: "Why it matters",
            body: "By reusing components, the system becomes faster to work with and easier to scale. Designers and developers can focus on improving behaviour, accessibility, and visual quality instead of rebuilding the same patterns again and again. A shared set of components also ensures consistency across the interface. Users encounter familiar patterns, interactions, and visual cues, which strengthens usability and reinforces the product’s identity. Because components are maintained in one place, changes and improvements automatically propagate throughout the product. This makes the system more resilient over time and better prepared for new features, platforms, and evolving requirements."
          }

        ]}
      >
        <ComponentPreview>
          <PreviewTile>
            <Button variant="primary" label="Primary" />
            <Button variant="secondary" label="Secondary" />
            <ThemeToggle/>
          </PreviewTile>
          <PreviewTile>
              <Card
                title="Card title"
                description="Cards can hold content, media, and links."/>
          </PreviewTile>


          <PreviewTile>
            <PageHeader 
              variant="page" 
              title="Heading" 
              intro="This is the preamble."
              />
          </PreviewTile>

          <PreviewTile>
          <ColorSwatch name="Accent" hex="#FFD400" role="Primary CTA" />
          </PreviewTile>
        </ComponentPreview>
    </DocSection>
    </div>
  );
}


