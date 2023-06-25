import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate=useNavigate()
  const auth= localStorage.getItem('user')
  const logout =()=>{
    localStorage.clear()
    navigate('/signup')
  }
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

        {auth ? (
          <li className="nav-item">
            <Link className="nav-link text-white" to="/signup" onClick={logout}>Logout</Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/signup">SignUp</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
