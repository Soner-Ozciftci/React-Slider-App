import React, { useState } from "react";
import people from "./data";
import { faChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Review() {
  return (
    <article className="review">
      <div className="img-container">
        <img src="https://upload.wikimedia.org/wikipedia/tr/0/03/Walter_White_S5B.png" alt="" />
      </div>
      <div className="name-job">
        <h4 className="name">Walter White</h4>
        <p className="job">Meth Manufacturer</p>
      </div>
      <p className="info">text</p>
      <div className="button-container">
        <button className="prev-btn">
          <faChevronCircleLeft/>
        </button>
        <button className="next-btn">
          <faChevronCircleRight/>
        </button>
      </div>
    </article>
  );
}

export default Review;
