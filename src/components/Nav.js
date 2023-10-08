import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/arrow-left.svg';
import '../Style/Navigation.css';

function Nav() {
  return (
    <nav>
      <div className="navigation">
        <img src={logo} alt="back" />
        <span>Back</span>
      </div>

      <ul className="Items">
        <li>
          <NavLink to="/air-details" activeClassName="active">
            Air Details
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
