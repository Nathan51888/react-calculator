import { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import Numpad from "./Numpad";
import Operators from "./Operators";
import TextField from "./TextField";

function Calculator() {
  const [currentEquation, setCurrentEquation] = useState([]);
  const [currentNumber, setCurrentNumber] = useState("");
  const [textField, setTextField] = useState("");
  const [finalResult, setFinalResult] = useState(0);

  useEffect(() => {
    setTextField(currentEquation.join("") + currentNumber);
  }, [currentEquation, currentNumber]);

  function number(e) {
    const num = e.target.textContent.toString();
    setCurrentNumber(currentNumber + num);
  }

  function backspace() {
    return;
  }

  function plus() {
    if (!currentNumber) {
      switch (currentEquation[currentEquation.length - 1]) {
        case "+":
          console.log("repeated operator");
          return;
        case "-": {
          const temp = [...currentEquation];
          temp[currentEquation.length - 1] = "+";
          setCurrentEquation(temp);
          return;
        }
      }
    }
    setCurrentEquation([...currentEquation, currentNumber, "+"]);
    setCurrentNumber("");
  }

  function minus() {
    if (!currentNumber) {
      switch (currentEquation[currentEquation.length - 1]) {
        case "-":
          console.log("repeated operator");
          return;
        case "+": {
          const temp = [...currentEquation];
          temp[currentEquation.length - 1] = "-";
          setCurrentEquation(temp);
          return;
        }
      }
    }
    setCurrentEquation([...currentEquation, currentNumber, "-"]);
    setCurrentNumber("");
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
