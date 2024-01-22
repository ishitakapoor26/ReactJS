import styles from "./Item.module.css";

// eslint-disable-next-line react/prop-types
let Item = ({ foodItem }) => {
  const handler = () => {
    alert(`${foodItem} being bought`);
  };

  return (
    <li className="list-group-item">
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`btn btn-info ${styles.button}`} onClick={handler}>
        Buy
      </button>
    </li>
  );
};

export default Item;
