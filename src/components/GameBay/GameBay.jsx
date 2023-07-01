import React from "react";
import "./GameBay.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../store/card/reducer";

const GameBay = ({ game }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="game_bay">
      <span className="price">{game.price} руб.</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Убрать из карзины" : "В карзину"}
      </Button>
    </div>
  );
};

export default GameBay;
