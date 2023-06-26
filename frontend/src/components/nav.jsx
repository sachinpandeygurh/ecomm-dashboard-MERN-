import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()
  const auth = localStorage.getItem('user')
  const logout = () => {
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div className="bg-primary">
      <ul className="container d-flex justify-content-start align-items-center navbar nav">
        <li className="nav-item logo rounded">
          <img alt="company " className="logo rounded-pill" src="https://t3.ftcdn.net/jpg/02/98/18/60/240_F_298186090_Rimyxol4jsYvYbQg1i6sttQ5N3oebXgt.jpg" />
        </li>
  
        {auth ?
          <> 
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
            <li className="nav-item">
              <Link className="nav-link text-white" to="/signup" onClick={logout}>Logout</Link>
            </li>

            <li className="nav-item position-absolute end-0">
  <Link className="nav-link text-success border rounded fs-3" to="/">
    <span className="fw-bold p-0 m-0 text-danger">
      Welcome
    </span>{" "}
    {JSON.parse(auth).name}
  </Link>
</li>


          </>
          :
  
          <>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/signup">Sign Up</Link>
            </li>
          </>
        }
      </ul>
    </div>
  );
  
}

export default NavBar;
