import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  const buttonsItems = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonsContainer items={buttonsItems}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
