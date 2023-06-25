import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const auth= localStorage.getItem('user')
  return (
    <div className="bg-primary">
      <ul className="container d-flex justify-content-start align-items-center align-content-center navbar nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/add">Add Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/update">Update Products</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/profile">Profile</Link>
        </li>
        <li >

          {auth?<Link className="nav-link text-white" to="/logout">Logout</Link>:<Link className="nav-link text-white" to="/signup">SignUp</Link>}

        </li>

      </ul>
    </div>



  );
}

export default NavBar;
