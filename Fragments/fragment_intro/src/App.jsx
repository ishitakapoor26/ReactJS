import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";

function App() {
  let mpp = ["Dal", "Roti", "Rice"];
  // Conditional Rendering
  // if (mpp.length === 0) {
  //   return <h3>I am still hungry!</h3>;
  // }

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={mpp}></ErrorMessage>
        <FoodItems items={mpp}></FoodItems>
        {/* <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li> */}
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
