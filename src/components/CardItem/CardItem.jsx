import React from "react";
import "./CardItem.css";

const CardItem = ({ title, id, price, image }) => {
  return (
    <div
      style={{
        background: `url(${image}) rgba(0, 0, 0, 0.5) center`,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
      className="card_item"
    >
      <div className="image">
        <img src={image} />
      </div>
      <div className="div">
        <span className="title">{title}</span>
        <div className="price">
          <span>{price} руб.</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
