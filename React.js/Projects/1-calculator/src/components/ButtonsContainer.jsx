import styles from "./ButtonsContainer.module.css";

// eslint-disable-next-line react/prop-types
function ButtonsContainer({ items }) {
  return (
    <div className={styles.buttonContainer}>
      {
        // eslint-disable-next-line react/prop-types
        items.map((item) => (
          <button className={styles.button} key={item}>
            {item}
          </button>
        ))
      }
    </div>
  );
}

export default ButtonsContainer;
