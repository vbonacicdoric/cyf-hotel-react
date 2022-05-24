import React from "react";
import Order from "./Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  return (
    <div className="restaurant-style">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="pizza" />
        <Order orderType="salad" />
        <Order orderType="chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
