import { useState } from "react";
import Item from "./Item";

// eslint-disable-next-line react/prop-types
function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {/* eslint-disable-next-line react/prop-types*/}
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
