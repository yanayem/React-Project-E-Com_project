import { useState } from 'react';

function Navbar() {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <div className="top_nab collapse navbar-collapse row p-3" id="navbarNav">
            <div className="right_sight col-sm-3">
              <img src="/src/assets/LOGO 1.png" alt="Company Logo" />
            </div>
            <div className="middle_section col-sm-7 mt-2 pt-1">
              <ul className="nav navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#AboutUs">Browse Menu</a></li>
                <li className="nav-item"><a className="nav-link" href="#Service">Special Offers</a></li>
                <li className="nav-item"><a className="nav-link" href="#Contact">Restaurants</a></li>
                <li className="nav-item"><a className="nav-link" href="#Contact">Track Order</a></li>
              </ul>
            </div>
            <div className="left_section col-sm-2">
              <div className="login_signin">
                <img src="/src/assets/Male User.png" alt="User Icon" />
                <span>Login/Signup</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default  Navbar;