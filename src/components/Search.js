import React, { useState } from "react";

function Search({ filterPokemon }) {
  const [searchInput, setSearchInput] = useState('')
  function handleSearch(event) {
    setSearchInput(event.target.value)
    filterPokemon(searchInput)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchInput} onChange={handleSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
