
import ContentLayout from "../components/ContentLayout/contentLayout";
import PageHeader from "../components/PageHeader/PageHeader";
// import TokenSection from "../components/TokenSection/TokenSection";
// import ColorSwatch from "../components/ColorSwatch/ColorSwatch";
import styles from "./DesignSystem.module.css";

export default function DesignSystemPage() {
  return (
    <div className="pagePadding">
      <ContentLayout size="lg">
        <ContentLayout size="md">
          <PageHeader
            title="The design system"
            intro="A living set of tokens and components that keep the site consistent, accessible, and easy to evolve."
          />
        </ContentLayout>
      </ContentLayout>
    </div>
  );
}

