/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
// import mapLogo from '../assets/world-map.svg';
import logo from '../assets/weather-svgrepo.svg';
import SearchFilter from './SearchFilter';
import '../Style/Navigation.css';

const Nav = ({ handleFilterChange }) => (
  <nav className="navigation">
    <img className="logo" src={logo} alt="logo" />
    <h1>In The Air</h1>
    <SearchFilter handleFilterChange={handleFilterChange} />
  </nav>
);

Nav.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Nav;
