import styles from "./Item.module.css";

// eslint-disable-next-line react/prop-types
let Item = ({ foodItem }) => {
  return (
    <li className="list-group-item">
      {/* <li className={`"list-group-item" ${styles["kg-item"]}`}> */}
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
