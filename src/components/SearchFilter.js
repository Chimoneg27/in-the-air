/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const SearchFilter = ({ handleFilterChange }) => (
  <div className="filter">
    <input
      type="text"
      placeholder="Search city..."
      onChange={(e) => handleFilterChange(e.target.value)}
    />
  </div>
);

SearchFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default SearchFilter;
