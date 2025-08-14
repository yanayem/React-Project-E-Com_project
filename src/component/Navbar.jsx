import React, { useState } from "react";
import Logo from "../assets/LOGO 1.png";
import UserIcon from "../assets/Male User.png";
import "bootstrap/dist/css/bootstrap.min.css";
import SignAndLog from "./SignAndLog"; // Import the component

function Navbar() {
  const [showAuth, setShowAuth] = useState(false); // Toggle visibility

  const toggleAuth = () => {
    setShowAuth((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container-fluid">
            <div className="top_nav collapse navbar-collapse row p-3" id="navbarNav">
              <div className="right_sight col-sm-3">
                <img src={Logo} alt="Company Logo" className="img-fluid" />
              </div>
              <div className="middle_section col-sm-7 mt-2 pt-1">
                <ul className="nav navbar-nav">
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
              </div>
              <div className="left_section col-sm-2 d-flex align-items-center justify-content-end">
                <button
                  className="login_signin d-flex align-items-center gap-2"
                  onClick={toggleAuth}
                >
                  <img
                    src={UserIcon}
                    alt="User Icon"
                    className="img-fluid"
                    style={{ width: "30px" }}
                  />
                  <span>Login/Signup</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Conditionally render SignAndLog */}
      {showAuth && <SignAndLog />}
    </>
  );
}

export default Navbar;