import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let mpp = ["Dal", "Roti", "Rice"];
  // Conditional Rendering
  // if (mpp.length === 0) {
  //   return <h3>I am still hungry!</h3>;
  // }

  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);

  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`Currrent value of textState:${textToShow}`);

  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
