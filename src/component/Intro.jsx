import { useState } from "react";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    
    import {faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
 

function Intro(){
  const time = "3:00 AM";
  return (
    <div className="container">
      <div className="intro_area  p-4 row">
         <div className="intro_text col-sm-7 mt-5">
        <p>I'm lovin' it!</p>
        <h1>McDonald’s East London</h1>
        <div className="intro_block row">
  <div className="text_box col-sm-4">
    <img className="info-icon me-2 col-sm-2" src="/src/assets/Order Completed.png" alt="" />
    Minimum Order: 12 GBP
  </div>
  <div className="text_box col-sm-4">
    <img className="info-icon me-2 col-sm-2" src="/src/assets/Motocross.png" alt="" />
    Delivery in 20-25 Minutes
  </div>
</div>
        
        <div className="open_timing">
        <img src="/src/assets/Clock.png" class="img-fluid"  alt="" />
        Open untail {time}
      </div>
      </div>
      <div className="right_intro_section col-sm-5 position-relative">
        <div className="intro_rating col-sm-3 position-absolute p-2 rounded-3 bg-white">
        <div className="fs-1 fw-semibold ">3.4</div>
        <div className="intro_star_icon">
          <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
        </div> 
  <div>1,360 Reviews</div>
      </div>
      <div className="intro_img ">
        <img src="/src/assets/Rectangle 44.png" alt="" />
      </div>
      </div>
      
      
      </div>
      

      <div className="search_section row p-4">
        <div className="text_box col-sm-8 fs-4 fw-bold ff-arial">All Offers from McDonald’s East London</div>
        <div className="col-sm-3"><form className="search_box  bg-white bd-search row">
  <button className="btn">
    <FontAwesomeIcon icon={faSearch} />
  </button>
  <input
    type="search"
    className="form-control"
    placeholder="Search from menu..."
    aria-label="Menu search"
  />
</form></div>
        
      </div>
     
    </div>
  );
}
export default Intro;