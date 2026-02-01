import ContentLayout from "../components/ContentLayout/contentLayout";
import PageHeader from "../components/PageHeader/PageHeader";

export default function AboutPage() {
    return (
    <div className="pagePadding">
      <ContentLayout size="lg">
        <ContentLayout size="md">
          <PageHeader
            title="About me"
            intro="Write something here."
          />
        </ContentLayout>
      </ContentLayout>
    </div>
    );
  }
  