import "./RecentDocuments.css";

import { FileCard } from "../../../components/upload";
import { SectionTitle } from "../../../components/ui";

import { recentDocuments } from "../../../data/mockDocuments";

function RecentDocuments() {
  return (
    <section className="recent-documents">

      <SectionTitle
        title="Recent Documents"
        subtitle="Your recently uploaded knowledge sources."
      />

      <div className="documents-grid">

        {recentDocuments.map((document) => (

          <FileCard
            key={document.id}
            document={document}
          />

        ))}

      </div>

    </section>
  );
}

export default RecentDocuments;