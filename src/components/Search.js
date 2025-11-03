import React from "react";

function Search({ filter, setFilter }) {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search notes..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default Search;
