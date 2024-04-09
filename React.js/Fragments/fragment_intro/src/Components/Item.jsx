import styles from "./Item.module.css";

// eslint-disable-next-line react/prop-types
let Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`btn btn-info ${styles.button}`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
