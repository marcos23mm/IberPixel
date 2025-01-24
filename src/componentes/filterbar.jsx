import React from 'react';
import '../css/filterbar.css';

const FilterBar = ({ sortOrder, handleSortChange }) => {
  return (
    <div className="filter-bar">
      <label htmlFor="sort">Buscar por Precio:</label>
      <select id="sort" value={sortOrder} onChange={handleSortChange}>
        <option value="asc">De menor a mayor</option>
        <option value="desc">De mayor a menor</option>
      </select>
    </div>
  );
};

export default FilterBar;
