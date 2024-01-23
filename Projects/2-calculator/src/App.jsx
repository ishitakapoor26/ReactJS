import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

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

  let [inputItems, setInputState] = useState("");

  let handleOnClick = (buttonText) => {
    if (buttonText === "C") {
      setInputState("");
    } else if (buttonText === "=") {
      const result = eval(inputItems);
      setInputState(result);
    } else {
      const newDispVal = inputItems + buttonText;
      setInputState(newDispVal);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display calVal={inputItems}></Display>
        <ButtonsContainer
          items={buttonsItems}
          handleOnClick={handleOnClick}
        ></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
