import styles from "./Container.module.css";

const Container = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
