import React from "react";
import { BiCartAlt } from "react-icons/bi";
import "./CardBlock.css";

const CardBlock = () => {
  return (
    <div className="card_block">
      <BiCartAlt size={25} className="cart_icon" />
      <span className="price"> 2313 руб. </span>
    </div>
  );
};

export default CardBlock;
