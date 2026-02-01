import ContentLayout from "../components/ContentLayout/contentLayout";
import PageHeader from "../components/PageHeader/PageHeader";


export default function ContactPage() {
    return (
    <div className="pagePadding">
      <ContentLayout size="lg">
        <ContentLayout size="md">
          <PageHeader
            title="Contact"
            intro="Write something here."
          />
        </ContentLayout>
      </ContentLayout>
    </div>
    );
  }
  