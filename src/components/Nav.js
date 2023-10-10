/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/weather-svgrepo.svg';
import SearchFilter from './SearchFilter';
import '../Style/Navigation.css';
import '../Style/Mobile.css';

const Nav = ({ handleFilterChange }) => (
  <header>
    <nav className="navigation">
      <img className="logo" src={logo} alt="logo" />
      <h1>In The Air</h1>
      <SearchFilter handleFilterChange={handleFilterChange} />
    </nav>
    <div className="Banner">
      <h2>Air Toxicity Levels Across Global Cities</h2>
    </div>
  </header>
);

Nav.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Nav;
