import Item from "./Item";

// eslint-disable-next-line react/prop-types
function FoodItems({ items }) {
  return (
    <ul className="list-group">
      {/* eslint-disable-next-line react/prop-types*/}
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
