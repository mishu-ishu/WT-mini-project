import React from "react";

const SearchBar = () => {
  return (
    <div className="search-container">
      <select className="search-input">
        <option>Pune</option>
        <option>Mumbai</option>
        <option>Bangalore</option>
      </select>
      <input type="text" className="search-input" placeholder="Search for locality, project, or builder" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
