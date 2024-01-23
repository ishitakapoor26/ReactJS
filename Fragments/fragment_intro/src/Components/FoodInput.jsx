import styles from "./FoodInput.module.css";

// eslint-disable-next-line react/prop-types
function FoodInput({ handleOnChange }) {
  return (
    <input
      type="text"
      className={styles.foodInput}
      onKeyDown={handleOnChange}
      // Synthetic event object in react, i.e. event
    ></input>
  );
}

export default FoodInput;
