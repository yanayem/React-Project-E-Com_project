import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import OrderCompleted from "../assets/Order Completed.png";
import Motocross from "../assets/Motocross.png";
import Clock from "../assets/Clock.png";
import RestaurantImg from "../assets/Rectangle 44.png";
import RenderStars from "./RenderStar";

function Intro() {
  const [searchTerm, setSearchTerm] = useState("");

  // Optional: Dynamic time logic (e.g., current time + 6 hours)
  const closingTime = "3:00 AM"; // You can replace this with dynamic logic if needed

  return (
    <div className="container">
      {/* Intro Section */}
      <div className="intro_area p-4 row">
        <div className="intro_text col-sm-7 mt-5 position-relative">
          <p className="fs-5">I'm lovin' it!</p>
          <h1 className="fw-bold fs-1">McDonald’s East London</h1>

          <div className="intro_block pt-4 row">
            <div className="text_box col-sm-4 d-flex align-items-center">
              <img
                className="info-icon me-2"
                src={OrderCompleted}
                alt="Order Completed Icon"
                aria-label="Order Completed Icon"
              />
              Minimum Order: 12 GBP
            </div>
            <div className="text_box col-sm-4 d-flex align-items-center">
              <img
                className="info-icon me-2"
                src={Motocross}
                alt="Delivery Icon"
                aria-label="Delivery Icon"
              />
              Delivery in 20–25 Minutes
            </div>
          </div>

          <div className="open_timing position-absolute start-0 bottom-0">
            <img
              src={Clock}
              className="img-fluid me-2"
              alt="Clock Icon"
              aria-label="Clock Icon"
            />
            Open until {closingTime}
          </div>
        </div>

        {/* Right Section */}
        <div className="right_intro_section col-sm-5 position-relative">
          <div className="intro_rating position-absolute star-0 bottom-0 ">
            <RenderStars />
          </div>
          <div className="intro_img">
            <img src={RestaurantImg} alt="Restaurant" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="search_section row align-items-center px-4 py-3 mt-4">
        <div className="col-md-8 mb-2 mb-md-0">
          <h2 className="fs-4 fw-bold mb-0">
            All Offers from McDonald’s East London
          </h2>
        </div>
        <div className="col-md-4">
          <form
            className="custom-search-box"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="d-flex align-items-center w-100">
              <button type="submit" className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                type="search"
                className="search-input"
                placeholder="Search from menu..."
                aria-label="Search menu items"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Intro;
