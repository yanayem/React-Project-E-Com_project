import React from "react";
import { useState } from "react";

function TopBar() {
  return (
    <div className="container">
      <div className=" top_bar row">
        <div className="left_topbar col-sm-5 pt-3">
          <img
            className=" float-start pe-2"
            src="/src/assets/🌟.png"
            alt="star"
          />
          <p className="">
            {" "}
            Get 5% Off your first order,
            <span className="ps-2" style={{ color: "#FC8A06" }}>
              Promo: ORDER5
            </span>
          </p>
        </div>
        <div className="right_topbar col-sm-7 row">
          <div className="top_bar_address col-sm-7 pt-3">
            <img
              className="float-start"
              src="/src/assets/Location.png"
              alt=""
            />
            <p>
              Regent Street, A4, A4201, London <a href="">Change Location</a>
            </p>
          </div>
          <div className="top_bar_item col-sm-5 row align-items-center">
            <div className="item-img col-sm-2">
              <img
                className="mx-auto d-block"
                src="/src/assets/Full Shopping Basket.png"
                alt="Shopping Basket"
              />
            </div>

            <div
              className="item_text col-sm-4 d-flex justify-content-center align-items-center"
              style={{
                borderRight: "1px solid #ccc",
                borderLeft: "1px solid #ccc",
              }}
            >
              <p className="mb-0">23 Items</p>
            </div>

            <div
              className="item_text col-sm-4 d-flex justify-content-center align-items-center"
              style={{
                borderRight: "1px solid #ccc",
              }}
            >
              <p className="mb-0">GBP 79.89</p>
            </div>

            <div className="item-img col-sm-2">
              <img
                className="mx-auto d-block"
                src="/src/assets/Forward Button.png"
                alt="Forward Button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
