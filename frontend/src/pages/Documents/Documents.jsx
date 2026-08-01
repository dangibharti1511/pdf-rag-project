import "./Documents.css";

import DocumentsHeader from "./components/DocumentsHeader/DocumentsHeader";

import SearchBar from "./components/toolbar/SearchBar/SearchBar";

import StatsCards from "./components/stats/StatsCards/StatsCards";

import DocumentGrid from "./components/grid/DocumentGrid/DocumentGrid";

import useDocuments from "./hooks/useDocuments";

function Documents() {

  const {

    documents,

    searchTerm,
    setSearchTerm,

    selectedType,
    setSelectedType,

    sortOption,
    setSortOption,

    viewMode,
    setViewMode,

    toggleFavorite

  } = useDocuments();

  return (

    <div className="documents-page">

      <DocumentsHeader />

      <SearchBar

        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}

        selectedType={selectedType}
        onTypeChange={setSelectedType}

        sortOption={sortOption}
        onSortChange={setSortOption}

        viewMode={viewMode}
        onViewModeChange={setViewMode}

      />

      <StatsCards />

      <DocumentGrid

        documents={documents}

        viewMode={viewMode}

        onToggleFavorite={toggleFavorite}

      />

    </div>

  );

}

export default Documents;