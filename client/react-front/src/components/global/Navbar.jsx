import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          TEST
        </a>

        <button
          type="button"
          className="navbar-toggler collapsed"
          data-toggle="collapse"
          data-target="#main-nav"
        >
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
        </button>

        <div id="main-nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li>
              <Link className="nav-item nav-link active" to="/">
                Profile
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-link active" to="/chat">
                Chat
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-link active" to="/todo">
                todo
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-link active" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
