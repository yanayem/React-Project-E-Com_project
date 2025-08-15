import React, { useState } from "react";
import Logo from "../assets/LOGO 1.png";
import UserIcon from "../assets/Male User.png";
import "bootstrap/dist/css/bootstrap.min.css";
import SignAndLog from "./SignAndLog";

function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  const toggleAuth = () => setShowAuth((prev) => !prev);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img src={Logo} alt="Company Logo" style={{ height: "40px" }} />
          </a>

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutUs">Browse Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Service">Special Offers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Restaurants</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#TrackOrder">Track Order</a>
              </li>
            </ul>

            {/* Login/Signup */}
            <div className="d-flex justify-content-center mt-3 mt-lg-0">
              <button
                className="btn btn-outline-primary d-flex align-items-center gap-2"
                onClick={toggleAuth}
              >
                <img
                  src={UserIcon}
                  alt="User Icon"
                  style={{ width: "25px" }}
                />
                <span>Login/Signup</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Popup */}
      {showAuth && <SignAndLog />}
    </>
  );
}

export default Navbar;
