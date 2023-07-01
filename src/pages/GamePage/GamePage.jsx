import React from "react";
import "./GamePage.css";
import { useSelector } from "react-redux";
import GameCover from "../../components/GameCover/GameCover";
import GameGenre from "../../components/GameGenre/GameGenre";
import GameBay from "../../components/GameBay/GameBay";

const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  if (!game) return null;

  return (
    <div className="game_page">
      <h1>{game.title}</h1> 
      <div className="content">
        <div className="left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="Youtube Video Player"
            frameBorder="null"
          ></iframe>
        </div>
        <div className="rigth">
          <GameCover image={game} />
          <p>{game.description}</p>
          <p className="text">Популярные метки этого продукта: </p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="buy_game">
            <GameBay game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
