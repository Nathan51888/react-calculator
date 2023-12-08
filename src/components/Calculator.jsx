import { useState, useEffect } from "react";
import styles from "./Calculator.module.css";
import Numpad from "./Numpad";
import Operators from "./Operators";
import TextField from "./TextField";

function Calculator() {
  const [currentEquation, setCurrentEquation] = useState([]);
  const [currentNumber, setCurrentNumber] = useState("");
  const [textField, setTextField] = useState("");
  const [textFieldResult, setTextFieldResult] = useState(0);

  useEffect(() => {
    setTextField(currentEquation.join("") + currentNumber);
  }, [currentEquation, currentNumber]);

  function number(e) {
    const num = e.target.textContent.toString();
    setCurrentNumber(currentNumber + num);
  }

  function backspace() {
    if (!currentNumber && currentEquation.length > 1) {
      const tempEquation = [...currentEquation];
      tempEquation.pop();
      setCurrentNumber(tempEquation[tempEquation.length - 1]);
      tempEquation.pop();
      setCurrentEquation(tempEquation);
      console.log("deleted an operator");
      return;
    }

    setCurrentNumber(currentNumber.slice(0, -1));
    console.log("deleted a number");
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
    // pushes currentNumber to a temporary equation array
    const tempEquation = [...currentEquation];
    tempEquation.push(currentNumber);

    // default result being currentNumber
    let tempFinalResult = parseInt(tempEquation[0]);
    console.log(tempEquation);

    // skips if there's nothing in currentEquation
    tempEquation.forEach((item, index) => {
      switch (item) {
        case "+":
          if (!tempEquation[index + 1]) return;
          tempFinalResult += parseInt(tempEquation[index + 1]);
          break;

        case "-":
          if (!tempEquation[index + 1]) return;
          tempFinalResult -= parseInt(tempEquation[index + 1]);
          break;
      }
    });
    // prints out final result
    console.log("Final result: " + tempFinalResult);
    setTextFieldResult(`${tempEquation.join(" ")} = ${tempFinalResult}`);

    // reset to default value
    setTextField("");
    setCurrentNumber("");
    setCurrentEquation([]);
  }

  return (
    <div>
      <TextField textField={textField} textFieldResult={textFieldResult}></TextField>
      <div className={styles.buttonGroup}>
        <Numpad numberButton={number}></Numpad>
        <Operators backspace={backspace} plus={plus} minus={minus} equals={equals}></Operators>
      </div>
    </div>
  );
}

export default Calculator;
