import styles from "./Display.module.css";

// eslint-disable-next-line react/prop-types
const Display = ({ calVal }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={calVal}
      readOnly
    ></input>
  );
};

export default Display;
