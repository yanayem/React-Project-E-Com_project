import { useState } from "react";
import "./MainNavbar.css"; // 👈 Link to your custom styles

function MainNavbar({ handleSectionChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "Offers",
    "Burgers",
    "Fries",
    "Snacks",
    "Salads",
    "Cold Drinks",
    "Happy Meal",
    "Desserts",
    "Hot Drinks",
    "Sauces",
    "Orbit",
  ];

  return (
    <div className="main_nav">
      <nav className="navbar navbar-expand-sm bg_1 p-2">
        <div className="container">
          <button
            className="navbar-toggler text-white"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <button
                    className="nav-link btn btn-link text-white"
                    onClick={() => handleSectionChange(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;