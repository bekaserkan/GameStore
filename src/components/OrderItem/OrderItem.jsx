import React from "react";
import "./OrderItem.css";
import { useDispatch } from "react-redux";
import GameCover from "../GameCover/GameCover";
import {TiDeleteOutline} from "react-icons/ti"
import { deleteItemFromCart } from "../../store/card/reducer";

const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className="order_item">
      <div className="cover">
        <GameCover image={game} />
      </div>
      <div className="title">
        <span>{game.title}</span>
      </div>
      <div className="price">
        <span>{game.price} руб. </span>
        <TiDeleteOutline
          size={25}
          className="delete_icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default OrderItem;
