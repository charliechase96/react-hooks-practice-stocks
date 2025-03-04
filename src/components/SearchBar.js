import React from "react";

function SearchBar({setSort, setFilter}) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={() => setSort("Alphabetically")}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          onChange={() => setSort("Price")}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => setFilter(event.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
