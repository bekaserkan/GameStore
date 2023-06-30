import React from "react";
import "./GameItem.css";
import GameCover from "../GameCover/GameCover";
import GameBay from "../GameBay/GameBay";
import GameGenre from "../GameGenre/GameGenre";

const GameItem = ({ game }) => {
  return (
    <div className="game_item">
      <GameCover image={game} />
      <div className="details">
        <span className="title">{game.title}</span>
        <div className="render">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="buy">
            <GameBay game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
