import React from "react";
import { useDispatch } from "react-redux";
import GameCover from "../GameCover/GameCover";
import GameBay from "../GameBay/GameBay";
import GameGenre from "../GameGenre/GameGenre";
import "./GameItem.css";
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../store/games/reducer";

const GameItem = ({ game }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };
  return (
    <div onClick={handleClick} className="game_item">
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
