import React from "react";
import "./Card.css";

function Card({ image, alt, title, description }) {
  return (
    <div className="my-nicho-shop-card">
      <div className="icon-div">
        <img src={image} alt={alt} />
      </div>
      <div className="text-div">
        <p className="card-title bold">{title}</p>
        <p className="card-smaller-text description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
