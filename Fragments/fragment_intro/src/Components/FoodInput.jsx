import styles from "./FoodInput.module.css";

function FoodInput() {
  return (
    <input
      type="text"
      className={styles.foodInput}
      onChange={(event) => {
        console.log(event.target.value);
      }}
      // Synthetic event object in react, i.e. event
    ></input>
  );
}

export default FoodInput;
