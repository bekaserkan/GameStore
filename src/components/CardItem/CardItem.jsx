import React from "react";
import "./CardItem.css";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/card/reducer";

const CardItem = ({ image, title, price, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };

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
        <span className="title">
          {title}{" "}
          <TiDeleteOutline
            size={25}
            className="delete_icon"
            onClick={handleClick}
          />
        </span>
        <div className="price">
          <span>{price} руб.</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
