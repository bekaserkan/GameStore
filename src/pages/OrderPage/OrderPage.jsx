import React from "react";
import "./OrderPage.css";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../components/utils";
import OrderItem from "../../components/OrderItem/OrderItem";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста</h1>;
  }

  return (
    <div className="order_page">
      <div className="left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="right">
        <div className="price">
          <span>
            {items.length === 1 ? " товар на сумму " : " товаров на сумму "}
            {calcTotalPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
