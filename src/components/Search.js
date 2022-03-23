import React from "react";

function Search({ searchTerm, onSearch }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          onChange={(e) => onSearch(e.target.value)}
          className="prompt"
          value={searchTerm} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
