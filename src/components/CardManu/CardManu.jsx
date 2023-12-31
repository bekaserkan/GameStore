import React from "react";
import "./CardManu.css";
import { calcTotalPrice } from "../utils";
import Button from "../Button/Button";
import CardItem from "../CardItem/CardItem";

const CardManu = ({ items, onClick, set }) => {
  const handleClick = () => {
    setTimeout(() => {
      set(false);
    }, 1000);
  };

  return (
    <div className="card_manu">
      <div className="game_list">
        {items.length > 0 ? (
          items.map((game) => (
            <CardItem
              data={items}
              key={game.title}
              price={game.price}
              title={game.title}
              id={game.id}
              image={game.image}
            />
          ))
        ) : (
          <div>Корзина пуста {handleClick()}</div>
        )}
      </div>
      {items.length > 0 ? (
        <div className="arrenge">
          <div className="total_price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CardManu;
