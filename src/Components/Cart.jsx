import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slice/cartSlice";

const Cart = () => {
  const items = useSelector(getItemSelector);
  console.log("Itemms: ", items);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {items.length} ({total})/-
      </h3>
    </div>
  );
};

export default Cart;
