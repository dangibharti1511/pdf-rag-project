import "./EmptyState.css";

import { FolderOpen } from "lucide-react";

function EmptyState() {

    return (

        <div className="empty-state">

            <FolderOpen size={60} />

            <h2>

                No Documents Found

            </h2>

            <p>

                Try changing your search or upload a new document.

            </p>

        </div>

    );

}

export default EmptyState;