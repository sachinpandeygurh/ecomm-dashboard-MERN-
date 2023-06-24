import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="container">
      <ul className="navbar">
        <li><Link to="/">Products</Link> </li>
        <li><Link to="/add">Add Products</Link> </li>
        <li><Link to="/update">Update Products</Link> </li>
        <li><Link to="/logout">Logout</Link> </li>
        <li><Link to="/profile">Profile</Link> </li>
      </ul>
    </div>
  );
}

export default NavBar;
