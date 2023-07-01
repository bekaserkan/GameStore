import React from "react";
import "./ItemsInCard.css"

const ItemsInCard = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="items_in_cart">{quantity}</div> : null;
};

export default ItemsInCard;
