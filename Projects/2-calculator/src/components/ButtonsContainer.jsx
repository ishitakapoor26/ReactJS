import styles from "./ButtonsContainer.module.css";

// eslint-disable-next-line react/prop-types
function ButtonsContainer({ items, handleOnClick }) {
  return (
    <div className={styles.buttonContainer}>
      {
        // eslint-disable-next-line react/prop-types
        items.map((item) => (
          <button
            className={styles.button}
            onClick={() => handleOnClick(item)}
            key={item}
          >
            {item}
          </button>
        ))
      }
    </div>
  );
}

export default ButtonsContainer;
