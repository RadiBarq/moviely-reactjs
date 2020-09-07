import React from "react";
import { NavLink, Link } from "react-router-dom";
import Movies from "../movies";
import Customers from '../customers';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Moviely
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-link" to="/rentals">
            Rentals
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar
