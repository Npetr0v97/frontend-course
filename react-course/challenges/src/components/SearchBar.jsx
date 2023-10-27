import { useState } from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <label>
      Search: <input value={searchQuery} onChange={setSearchQuery} />
    </label>
  );
}

export default SearchBar;
