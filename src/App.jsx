/**
 * Calculator App
 *
 * This React application provides a simple calculator interface. Users can input
 * mathematical expressions and perform calculations. The app includes a display
 * area, buttons for input, and logic to evaluate expressions.
 *
 * Components:
 * - `Button`: Renders calculator buttons.
 * - `Display`: Displays the current input value.
 *
 * Styling:
 * - CSS modules are used for styling (imported from './App.module.css').
 *
 * @version 1.0.0
 * @author Mohammed Anas
 */
import { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/ButtonContainer";
import Display from "./components/Display";
function App() {
  const [Val, setValue] = useState("");

  const onButtonClicked = (oneClick) => {
    if (oneClick === "C") {
      setValue("");
    } else if (oneClick === "=") {
      const result = eval(Val);
      setValue(result);
    } else {
      const newValue = Val + oneClick;
      setValue(newValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display value={Val} />
      <Button buttonClicked={onButtonClicked} />
    </div>
  );
}

export default App;
