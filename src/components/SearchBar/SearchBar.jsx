import React, { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  function search(e) {
    e.preventDefault();
    setSearchInput(e.song.title);
  }

  return (
    <div className="searchBar">
      <button className="bg-white p-4">🔍</button>
    </div>
  );
};

export default SearchBar;
