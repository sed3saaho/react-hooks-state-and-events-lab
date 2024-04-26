import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "item in-cart" : "item"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "toggle remove" : "toggle add"}
        onClick={handleAddToCartClick}
      >
        Toggle Cart Status
      </button>
    </li>
  );
}

export default Item;