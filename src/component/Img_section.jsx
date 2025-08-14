import React from "react";
import FirstImg from "../assets/Group 8.png";
import SecondImg from "../assets/Group 8(1).png";
import ThirdImg from "../assets/Group 8(2).png";
import ADDplus from "../assets/Plus.png";
//import './ImgSection.css'; // Custom styles

function Img_section() {
  return (
    <div className="img-section container">
      <div className="row my-5">
        {[FirstImg, SecondImg, ThirdImg].map((img, index) => (
          <div className="col-sm-4 mb-4" key={index}>
            <div className="card position-relative img-card">
              <img
                src={img}
                alt={`Offer ${index + 1}`}
                className="card-img img-fluid w-100 h-100 object-fit-cover"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-between p-2">
                <div className="discount position-absolute top-0 end-0 bg-black  me-3 text-white px-2 py-2 rounded">
                  <span className="mb-0">
                    {index === 0 || index === 1 ? "-20%" : "-100%"}
                  </span>
                </div>
                <div className="img_text text-white mt-auto">
                  <div className="img_p">McDonald’s East London</div>
                  <div className="img_p1">
                    {index === 0
                      ? "First Order Discount"
                      : index === 1
                      ? "Vegan Discount"
                      : "Free Ice Cream Offer"}
                  </div>
                </div>
                <div className="addtocart position-absolute bg-white bottom-0 end-0 br-3">
                  <button className="btn">
                    <img
                      src={ADDplus}
                      alt="Add to cart"
                      style={{ width: "50px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Img_section;
