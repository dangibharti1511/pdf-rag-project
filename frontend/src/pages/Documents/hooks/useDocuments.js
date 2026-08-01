import { useMemo, useState } from "react";
import { mockFiles } from "../../../data/mockFiles";

function useDocuments() {
  const [documents, setDocuments] = useState(mockFiles);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedType, setSelectedType] = useState("ALL");

  const [sortOption, setSortOption] = useState("NAME_ASC");

  const [viewMode, setViewMode] = useState("GRID");

  const filteredDocuments = useMemo(() => {
    let filtered = [...documents];

    // Search
    filtered = filtered.filter((file) => {
      const search = searchTerm.toLowerCase();

      return (
        file.name.toLowerCase().includes(search) ||
        file.type.toLowerCase().includes(search)
      );
    });

    // File Type
    if (selectedType !== "ALL") {
      filtered = filtered.filter(
        (file) => file.type === selectedType
      );
    }

    // Sorting
    switch (sortOption) {
      case "NAME_ASC":
        filtered.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "NAME_DESC":
        filtered.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;

      case "TYPE":
        filtered.sort((a, b) =>
          a.type.localeCompare(b.type)
        );
        break;

      case "SIZE":
        filtered.sort((a, b) =>
          a.size.localeCompare(b.size)
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [
    documents,
    searchTerm,
    selectedType,
    sortOption
  ]);

  const toggleFavorite = (id) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id
          ? {
              ...doc,
              favorite: !doc.favorite
            }
          : doc
      )
    );
  };

  return {
    documents: filteredDocuments,

    searchTerm,
    setSearchTerm,

    selectedType,
    setSelectedType,

    sortOption,
    setSortOption,

    viewMode,
    setViewMode,

    toggleFavorite
  };
}

export default useDocuments;