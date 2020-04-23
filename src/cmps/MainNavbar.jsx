import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function MainNavbar() {
  return (
    <nav className="main-navbar">
      <div className="main-navbar-nav container">
        <NavLink to="/" className="main-navbar-nav-link" exact activeClassName="active">
          <FontAwesomeIcon icon="home" title="Home" />
        </NavLink>
        <NavLink to="/contact" className="main-navbar-nav-link" exact activeClassName="active">
          <FontAwesomeIcon icon="address-book" title="Contact List" />
        </NavLink>
        <NavLink to="/statistics" className="main-navbar-nav-link" activeClassName="active">
          <FontAwesomeIcon icon="chart-line" title="Statistics" />
        </NavLink>
        <NavLink to="/signup" className="main-navbar-nav-link" activeClassName="active">
          <FontAwesomeIcon icon="sign-in-alt" title="Sing Up" />
        </NavLink>
      </div>
    </nav>
  );
}

export default MainNavbar;
