import "./SearchBar.css";

import {
  Search,
  LayoutGrid,
  List,
} from "lucide-react";

const fileTypes = [
  "ALL",
  "PDF",
  "DOCX",
  "CSV",
  "XLSX",
  "PPTX",
  "IMAGE",
  "AUDIO",
  "VIDEO"
];

const sortOptions = [
  {
    label: "Name (A-Z)",
    value: "NAME_ASC"
  },
  {
    label: "Name (Z-A)",
    value: "NAME_DESC"
  },
  {
    label: "File Type",
    value: "TYPE"
  },
  {
    label: "File Size",
    value: "SIZE"
  }
];

function SearchBar({

  searchTerm,

  onSearchChange,

  selectedType,

  onTypeChange,

  sortOption,

  onSortChange,

  viewMode,

  onViewModeChange

}) {

  return (

    <div className="search-bar">

      <div className="search-box">

        <Search size={18} />

        <input

          type="text"

          placeholder="Search documents..."

          value={searchTerm}

          onChange={(e)=>
            onSearchChange(e.target.value)
          }

        />

      </div>

      <div className="search-actions">

        <select

          className="action-btn"

          value={selectedType}

          onChange={(e)=>
            onTypeChange(e.target.value)
          }

        >

          {fileTypes.map(type=>(

            <option

              key={type}

              value={type}

            >

              {type}

            </option>

          ))}

        </select>

        <select

          className="action-btn"

          value={sortOption}

          onChange={(e)=>
            onSortChange(e.target.value)
          }

        >

          {sortOptions.map(option=>(

            <option

              key={option.value}

              value={option.value}

            >

              {option.label}

            </option>

          ))}

        </select>

        <button

          className="action-btn"

          onClick={()=>

            onViewModeChange(

              viewMode==="GRID"

              ? "LIST"

              : "GRID"

            )

          }

        >

          {

            viewMode==="GRID"

            ? <List size={18}/>

            : <LayoutGrid size={18}/>

          }

          {

            viewMode==="GRID"

            ? "List"

            : "Grid"

          }

        </button>

      </div>

    </div>

  );

}

export default SearchBar;