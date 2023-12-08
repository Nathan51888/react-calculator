import { useState } from "react";
import styles from "./Calculator.module.css";
import Numpad from "./Numpad";
import Operators from "./Operators";
import TextField from "./TextField";

function Calculator() {
  const [currentEquation, setCurrentEquation] = useState([]);
  const [currentNumber, setCurrentNumber] = useState("");
  const [textField, setTextField] = useState("");
  const [finalResult, setFinalResult] = useState(0);

  function number(e) {
    const num = e.target.textContent.toString();
    setCurrentNumber(currentNumber + num);
    setTextField(textField + num);
  }

  function backspace() {
    return;
  }
  function plus() {
    return;
  }
  function minus() {
    return;
  }
  function equals() {
    return;
  }

  return (
    <div>
      <TextField textField={textField} textFieldResult={finalResult}></TextField>
      <div className={styles.buttonGroup}>
        <Numpad numberButton={number}></Numpad>
        <Operators backspace={backspace} plus={plus} minus={minus} equals={equals}></Operators>
      </div>
    </div>
  );
}

export default Calculator;
