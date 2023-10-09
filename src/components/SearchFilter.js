/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const SearchFilter = ({ handleFilterChange }) => (
  <div className="search-filter">
    <input type="text" placeholder="Search..." onChange={(e) => handleFilterChange(e.target.value)} />
  </div>
);

SearchFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default SearchFilter;
