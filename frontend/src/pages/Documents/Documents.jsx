import "./Documents.css";

import DocumentsHeader from "./components/DocumentsHeader/DocumentsHeader";
import EmptyState from "./components/empty/EmptyState/EmptyState";
import SearchBar from "./components/toolbar/SearchBar/SearchBar";

import StatsCards from "./components/stats/StatsCards/StatsCards";

import DocumentGrid from "./components/grid/DocumentGrid/DocumentGrid";

import useDocuments from "./hooks/useDocuments";

function Documents() {

  const{

   documents,

   loading,

   searchTerm,

   setSearchTerm,

   selectedType,

   setSelectedType,

   sortOption,

   setSortOption,

   viewMode,

   setViewMode,

   deleteDocument

  }=useDocuments();
  if(!loading && (!documents || documents.length === 0)){

     return(

        <div className="documents-page">

            <DocumentsHeader/>

           <EmptyState/>

        </div>

   );

  }
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

      <StatsCards documents={documents} />

      <DocumentGrid

        documents={documents}

        viewMode={viewMode}
        onDelete={deleteDocument}

      />

    </div>

  );

}

export default Documents;