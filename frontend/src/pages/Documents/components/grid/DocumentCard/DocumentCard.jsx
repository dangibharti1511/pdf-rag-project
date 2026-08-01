import "./DocumentCard.css";

import {
    FileText,
    Star,
    Sparkles,
    Clock,
    HardDrive
} from "lucide-react";

import clsx from "clsx";

function DocumentCard({

    file,

    viewMode,

    onToggleFavorite

}) {

    return (

        <div

            className={clsx(

                "document-card",

                viewMode === "LIST" && "list-view"

            )}

        >

            <div className="document-icon">

                <FileText size={26} />

            </div>

            <div className="document-content">

                <h3>{file.name}</h3>

                <span className="document-type">

                    {file.type}

                </span>

                <div className="document-meta">

                    <span>

                        <HardDrive size={15} />

                        {file.size}

                    </span>

                    <span>

                        <Clock size={15} />

                        {file.uploadedAt}

                    </span>

                </div>

                <span

                    className={clsx(

                        "status",

                        file.aiReady

                            ? "ready"

                            : "pending"

                    )}

                >

                    <Sparkles size={14} />

                    {file.status}

                </span>

            </div>

            <button

                className={clsx(

                    "favorite-btn",

                    file.favorite && "active"

                )}

                onClick={() =>

                    onToggleFavorite(file.id)

                }

            >

                <Star

                    size={20}

                    fill={

                        file.favorite

                            ? "currentColor"

                            : "none"

                    }

                />

            </button>

        </div>

    );

}

export default DocumentCard;