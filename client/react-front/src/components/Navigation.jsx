import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ user, children }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#">
        <i className="fas fa-clipboard-list"></i>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="link nav-link" to="/">
              home
            </Link>
          </li>
          {user && (
            <li className="nav-item">
              <Link className="link nav-link" to="/todos">
                todos
              </Link>
            </li>
          )}
        </ul>
        {!user && (
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            <Link
              className="link nav-link"
              style={{ color: "white" }}
              to="/authorization"
            >
              sign in / log in
            </Link>
          </button>
        )}
        {children}
      </div>
    </nav>
  );
}
