import React, { useState } from "react";
import customarimg from "../assets/Ellipse 3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const CustomarData = [
  {
    img: customarimg,
    desc: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    rating: 5,
  },
  {
    img: customarimg,
    desc: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    rating: 4,
  },
  {
    img: customarimg,
    desc: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    rating: 3,
  },
  {
    img: customarimg,
    desc: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    rating: 4,
  },
  {
    img: customarimg,
    desc: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    rating: 5,
  },
  {
    img: customarimg,
    desc: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    rating: 4,
  },
  {
    img: customarimg,
    desc: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    rating: 3,
  },
  {
    img: customarimg,
    desc: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    rating: 4,
  },
  {
    img: customarimg,
    desc: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
    rating: 5,
  },
];

function CustomarReview() {
  const [startIndex, setStartIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const reviewsPerPage = 3;

  const handlePrev = () => {
    if (startIndex > 0) {
      setAnimate(true);
      setTimeout(() => {
        setStartIndex(startIndex - 1);
        setAnimate(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (startIndex + reviewsPerPage < CustomarData.length) {
      setAnimate(true);
      setTimeout(() => {
        setStartIndex(startIndex + 1);
        setAnimate(false);
      }, 300);
    }
  };

  const visibleReviews = CustomarData.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  return (
    <div className="review my-5">
      <div className="container">
        <div className="review__header d-flex justify-content-between align-items-center mb-4">
          <h1 className="review__title fs-1 fw-bolder">Customer Reviews</h1>
          <div className="review__controls d-flex gap-2">
            <button
              className="review__btn btn rounded-circle "
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
              className="review__btn btn  rounded-circle "
              onClick={handleNext}
              disabled={startIndex + reviewsPerPage >= CustomarData.length}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
        <div
          className={`row row-cols-1 row-cols-md-3 g-4 ${
            animate ? "review__card--fade" : ""
          }`}
        >
          {visibleReviews.map((item, index) => (
            <div className="col" key={startIndex + index}>
              <div className="review__card card h-100 shadow-lg border-0 p-3">
                <div className="row align-items-center">
                  {/* Left Side */}
                  <div className="col-sm-7 d-flex align-items-center gap-3">
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={`Customer ${startIndex + index + 1}`}
                      className="review__image rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />

                    {/* Vertical Line */}
                    <div
                      className="vr"
                      style={{
                        height: "50px",
                        borderLeft: "3px solid #FC8A06",
                      }}
                    ></div>

                    {/* Text */}
                    <div>
                      <h6 className="mb-0 fw-bold">St Glx</h6>
                      <small style={{ color: "#FC8A06" }}>South London</small>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="col-sm-5 text-end">
                    <div className="review__stars mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className={`me-1 ${
                            i < item.rating ? "text-warning" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <small className="review__date text-muted">
                      <FontAwesomeIcon icon={faClock} className="me-1" />
                      24th September, 2023
                    </small>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomarReview;
