import "./DocumentGrid.css";

import DocumentCard from "../DocumentCard/DocumentCard";

import EmptyState from "../../empty/EmptyState/EmptyState";

function DocumentGrid({

  documents,

  viewMode,

  onToggleFavorite

}) {

  if(documents.length===0){

    return <EmptyState/>;

  }

  return(

    <div

      className={

        viewMode==="GRID"

        ? "document-grid"

        : "document-list"

      }

    >

      {

        documents.map(file=>(

          <DocumentCard

            key={file.id}

            file={file}

            viewMode={viewMode}

            onToggleFavorite={onToggleFavorite}

          />

        ))

      }

    </div>

  );

}

export default DocumentGrid;