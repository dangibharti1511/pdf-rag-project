import "./DocumentGrid.css";

import DocumentCard from "../DocumentCard/DocumentCard";
import EmptyState from "../../empty/EmptyState/EmptyState";

function DocumentGrid({

    documents = [],

    viewMode,

    onDelete

}) {

    if (documents.length === 0) {

        return <EmptyState />;

    }

    return (

        <div
            className={
                viewMode === "grid"
                    ? "document-grid"
                    : "document-list"
            }
        >

            {

                documents.map((document) => (

                    <DocumentCard

                        key={document.id}

                        document={document}

                        viewMode={viewMode}

                        onDelete={onDelete}

                    />

                ))

            }

        </div>

    );

}

export default DocumentGrid;