import "./FileCard.css";

import {
    FileText,
    FileSpreadsheet,
    FileImage,
    FileArchive
} from "lucide-react";

import { Badge } from "../ui";

function FileCard({ document }) {

    const getIcon = () => {

        switch (document.type) {

            case "PDF":
            case "Word":
                return <FileText size={28} />;

            case "Excel":
            case "CSV":
                return <FileSpreadsheet size={28} />;

            case "Image":
                return <FileImage size={28} />;

            default:
                return <FileArchive size={28} />;

        }

    };

    return (

        <div className="file-card">

            <div className="file-info">

                <div className="file-icon">

                    {getIcon()}

                </div>

                <div className="file-details">

                    <h3>{document.name}</h3>

                    <p>

                        {document.type} • {document.size}

                    </p>

                    <span>

                        {document.uploadedAt}

                    </span>

                </div>

            </div>

            <Badge
                color={
                    document.status === "Ready"
                        ? "success"
                        : "warning"
                }
            >
                {document.status}
            </Badge>

        </div>

    );

}

export default FileCard;