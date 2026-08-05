import "./DocumentCard.css";

import {
    FileText,
    Trash2,
    HardDrive
} from "lucide-react";

import clsx from "clsx";

function DocumentCard({

    document,

    viewMode,

    onDelete

}) {

    return (

        <div
            className={clsx(
                "document-card",
                viewMode === "list" && "list-view"
            )}
        >

            <div className="document-icon">

                <FileText size={26} />

            </div>

            <div className="document-content">

                <h3>{document.name}</h3>

                <span className="document-type">

                    {document.type}

                </span>

                <div className="document-meta">

                    <span>

                        <HardDrive size={15} />

                        {document.size} MB

                    </span>

                </div>

            </div>

            <button
                className="delete-button"
                onClick={() => onDelete(document.name)}
            >

                <Trash2 size={18} />

            </button>

        </div>

    );

}

export default DocumentCard;