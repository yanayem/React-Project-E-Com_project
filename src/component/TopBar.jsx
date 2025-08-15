import React from "react"; // Import custom styles

function TopBar() {
  return (
    <div className="topbar-container">
      {/* Left Section */}
      <div className="topbar-left">
        <img src="/src/assets/🌟.png" alt="star" className="topbar-icon" />
        <p className="topbar-text">
          Get 5% Off your first order,
          <span className="promo-text"> Promo: ORDER5</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="topbar-right">
        {/* Address */}
        <div className="topbar-address">
          <img
            src="/src/assets/Location.png"
            alt="Location"
            className="topbar-icon"
          />
          <p className="topbar-text">
            Regent Street, A4, A4201, London{" "}
            <a href="/" className="location-link">Change Location</a>
          </p>
        </div>

        {/* Basket */}
        <div className="topbar-basket">
          <img
            src="/src/assets/Full Shopping Basket.png"
            alt="Shopping Basket"
            className="basket-icon"
          />
          <p className="basket-text">23 Items</p>
          <p className="basket-text">GBP 79.89</p>
          <img
            src="/src/assets/Forward Button.png"
            alt="Forward Button"
            className="basket-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
