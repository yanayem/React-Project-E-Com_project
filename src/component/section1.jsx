import React from "react";
import Firstimg from "../assets/Rectangle 46.png";
import Secondtimg from "../assets/Rectangle 46(1).png";
import thirdtimg from "../assets/Rectangle 46(2).png";
import ADDplus from "../assets/Plus.png";

const burgerData = [
  {
    img: Firstimg,
    title: "Royal Cheese Burger with extra Fries",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
  },
  {
    img: Firstimg,
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
  },
  {
    img: Firstimg,
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
  },
  {
    img: Secondtimg,
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
  },
  {
    img: Firstimg,
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
  },
  {
    img: thirdtimg,
    title: "The classics for 3",
    desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
  },
];

function Section1() {
  return (
    <div className="section_1 container">
      <h2 className="sec_title my-4">Burgers</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {burgerData.map((item, index) => (
          <div className="col mb-3" key={index}>
            <div
              className="card h-100 shadow-lg p-3"
              style={{ maxWidth: "100%", border: "none" }}
            >
              <div className="row g-0 d-flex h-100">
                <div className="col-sm-8 d-flex align-items-center">
                  <div className="text-center">
                    <h5 className="sec_head card-title">{item.title}</h5>
                    <p className="sec_text card-text">{item.desc}</p>
                    <strong>{item.price}</strong>
                  </div>
                </div>
                <div className="col-sm-4 d-flex align-items-stretch position-relative">
                  <img
                    src={item.img}
                    alt={`Burger ${index + 1}`}
                    className="img-fluid rounded w-100"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                  <div className="addtocart_sec position-absolute bottom-0 end-0 p-1">
                    <button className="btn">
                      <img
                        src={ADDplus}
                        alt="Add to cart"
                        style={{ width: "40px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section1;
