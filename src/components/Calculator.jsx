import styles from "./Calculator.module.css";
import Numpad from "./Numpad";
import Operators from "./Operators";
import TextField from "./TextField";

function Calculator() {
  return (
    <div>
      <TextField></TextField>
      <div className={styles.buttonGroup}>
        <Numpad></Numpad>
        <Operators></Operators>
      </div>
    </div>
  );
}

export default Calculator;
