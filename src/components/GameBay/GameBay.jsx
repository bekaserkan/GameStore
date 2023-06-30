import React from "react";
import "./GameBay.css";
import Button from "../Button/Button";

const GameBay = ({ game }) => {
  return (
    <div className="game_bay">
      <span className="price">{game.price} рубю</span>
      <Button type="primary" onClick={() => null}>В карзину</Button>
    </div>
  );
};

export default GameBay;
