import React from "react";
import "./GameCover.css";

const GameCover = ({ image }) => {
  return (
    <img className="game_cover" src={image.image} alt="" />
  );
};

export default GameCover;
