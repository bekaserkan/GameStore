import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import CardBlock from "../CardBlock/CardBlock";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="logo">
          Game Store
        </Link>
        <div className="card_btn">
          <CardBlock />
        </div>
      </div>
    </div>
  );
};

export default Header;
