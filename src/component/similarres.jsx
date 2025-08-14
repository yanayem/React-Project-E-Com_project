import React from "react";
import Card from "react-bootstrap/Card";
import Firstimg from "../assets/Rectangle 13.png";
import Secondimg from "../assets/Rectangle 13(1).png";
import thirdimg from "../assets/Rectangle 13(2).png";
import forthimg from "../assets/Rectangle 13(3).png";
import fifthimg from "../assets/Rectangle 13(4).png";
import sixthimg from "../assets/Rectangle 13(5).png";
import RenderStars from "./RenderStar";

// Restaurant data array with ratings and reviews
const RestaurantsData = [
  {
    img: Firstimg,
    title: "McDonald’s London",
    rating: 4.2,
    totalReviews: 1200,
  },
  { img: Secondimg, title: "Papa Johns", rating: 3.8, totalReviews: 980 },
  { img: thirdimg, title: "KFC West London", rating: 4.5, totalReviews: 1500 },
  { img: forthimg, title: "Texas Chicken", rating: 4.0, totalReviews: 1100 },
  { img: fifthimg, title: "Burger King", rating: 3.6, totalReviews: 870 },
  { img: sixthimg, title: "Shaurma 1", rating: 4.1, totalReviews: 940 },
];

function SimilarRestaurants() {
  return (
    <div className="SimilarRestaurants_section my-5 text-center">
      <div className="SimilarRestaurants_section_head position-relative">
        <div
          className="position-absolute top-0 start-50 translate-middle-x"
          style={{ marginTop: "-180px" }}
        >
          <RenderStars />
        </div>
        <div className="fs-1 fw-bolder mb-4 text-start">
          Similar Restaurants
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">
        {RestaurantsData.map((restaurant, index) => (
          <div className="col" key={index}>
            <Card
              className="h-100 shadow-lg border-0"
              style={{
                borderRadius: "0.75rem",
                overflow: "hidden",
              }}
            >
              <Card.Img
                variant="top"
                src={restaurant.img}
                alt={restaurant.title}
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              <Card.Body
                className="text-center"
                style={{
                  backgroundColor: "#FC8A06",
                  color: "#fff",
                  padding: "0.75rem",
                }}
              >
                <Card.Title
                  className="fw-bold fs-6 text-truncate mb-1"
                  title={restaurant.title}
                >
                  {restaurant.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarRestaurants;
