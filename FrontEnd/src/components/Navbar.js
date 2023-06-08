import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const protectedNavigation = localStorage.getItem("user");
  console.log(protectedNavigation);
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/signup"
            style={{ color: "#FFB703" }}
          >
            <strong>TrackerMania</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                {protectedNavigation ? (
                  <Link className="nav-link active" to="/" aria-current="page">
                    Home
                  </Link>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                {protectedNavigation ? (
                  <Link className="nav-link" to="/" style={{ color: "white" }}>
                    Add Activity
                  </Link>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                {protectedNavigation ? (
                  <Link
                    className="nav-link"
                    to="/showactivity"
                    style={{ color: "white" }}
                  >
                    Activities
                  </Link>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                {!protectedNavigation ? (
                  <Link
                    className="nav-link"
                    to="/signup"
                    style={{ color: "white" }}
                  >
                    Signup
                  </Link>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                {!protectedNavigation ? (
                  <Link
                    className="nav-link"
                    to="/login"
                    style={{ color: "white" }}
                  >
                    Login
                  </Link>
                ) : (
                  <Link
                  style={{ color: "white" }}
                    to="/login"
                    onClick={logoutHandler}
                    
                  >
                    Logout
                  </Link>
                )}
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to='/login' onClick={logoutHandler}>
                  Logout
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
