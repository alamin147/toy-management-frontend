import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { userphoto, username, user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="py-4 bg-light">
      <nav className="container navbar navbar-expand-lg bg-body-tertiary d-flex align-items-center">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none">
            <div className="d-inline">
              <img src="../../../car.png" className="me-3" alt="" />
              <p className="d-inline gap-3 fw-bold navbar-brand" href="#">
                Wonder Spark Toys
              </p>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="" to="/">
                  <p className="nav-link" aria-current="page" href="#">
                    Home
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="" to="/allToysShop">
                  <p className="nav-link" aria-current="page" href="#">
                    All Toys
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="" to="/blog">
                  <p className="nav-link" href="#">
                    Blog
                  </p>
                </NavLink>
              </li>
              {user ? (
                <></>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="" to="/login">
                      <p className="nav-link" aria-current="page" href="#">
                        Login
                      </p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="" to="/register">
                      <p className="nav-link" aria-current="page" href="#">
                        Register
                      </p>
                    </NavLink>
                  </li>
                </>
              )}

              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="" to="/myToys">
                      <p className="nav-link" aria-current="page" href="#">
                        My Toys
                      </p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="" to="/addToys">
                      <p className="nav-link" aria-current="page" href="#">
                        Add a Toy
                      </p>
                    </NavLink>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
            <div>
              <div>
                {user ? (
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        title={user?.displayName || username}
                        src={user?.photoURL || userphoto}
                        className="customUserImg img-fluid img-thumbnail rounded rounded-5"
                        alt=""
                      />
                    </div>
                    <div>
                      <NavLink>
                        <button
                          className="btn btn-info text-white"
                          type=""
                          onClick={handleLogOut}
                        >
                          Log out
                        </button>
                      </NavLink>
                    </div>
                  </div>
                ) : (
                  <NavLink to="/login">
                    <button className="btn btn-info text-white">Login</button>
                  </NavLink>
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
