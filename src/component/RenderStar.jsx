import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

function RenderStars({ rating = 3.5, totalReviews = 1230, maxStars = 5 }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 1; i <= maxStars; i++) {
      if (i <= fullStars) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#ffc107" }} />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStarHalf} style={{ color: "#ffc107" }} />
        );
      } else {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#e4e5e9" }} />
        );
      }
    }
    return stars;
  };

  return (
    <div className="container">
      <div
        className="card text-center bg-white p-3 rounded border-0"
        style={{ width: "115px", height: "120px" }}
      >
        <div className="fs-3 fw-bolder">{rating.toFixed(1)}</div>
        <div
          className="d-flex justify-content-center mb-1 py-1"
          aria-label={`Rating: ${rating} out of ${maxStars}`}
        >
          {renderStars(rating)}
        </div>
        <div
          style={{ fontSize: "12px", color: "#a7a1a1ff" }}
          aria-label={`Total reviews: ${totalReviews}`}
        >
          {totalReviews.toLocaleString()} Reviews
        </div>
      </div>
    </div>
  );
}

RenderStars.propTypes = {
  rating: PropTypes.number,
  totalReviews: PropTypes.number,
  maxStars: PropTypes.number,
};

export default RenderStars;