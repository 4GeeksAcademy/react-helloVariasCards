import React from "react";

const Navbar = () => {
    return (
        <div className="topbar bg-dark">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Start Boostrap
          </a>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-light" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}
export default Navbar;