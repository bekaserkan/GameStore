import React, { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import "./CardBlock.css";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils";
import CardManu from "../CardManu/CardManu";
import ItemsInCard from "../ItemsInCard/ItemsInCard";

const CardBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="card_block">
      <ItemsInCard quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart_icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="price"> {totalPrice} руб. </span>
      ) : null}
      {isCartMenuVisible && <CardManu items={items} onClick={() => null} />}
    </div>
  );
};

export default CardBlock;
