import React from "react";
import "./HomePage.css";
import { GAMES } from "./HomePageData";
import GameItem from "../../components/GameItem/GameItem";

const HomePage = () => {
  return <div className="home_page">
    {
      GAMES.map(game => <GameItem game={game} key={game.id} />)
    }
  </div>;
};

export default HomePage;
