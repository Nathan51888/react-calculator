import styles from "./Numpad.module.css";

function Numpad({ numberButton }) {
  return (
    <>
      <div className={styles.numpad}>
        <button onClick={numberButton} id="seven">
          7
        </button>
        <button onClick={numberButton} id="eight">
          8
        </button>
        <button onClick={numberButton} id="nine">
          9
        </button>
        <button onClick={numberButton} id="four">
          4
        </button>
        <button onClick={numberButton} id="five">
          5
        </button>
        <button onClick={numberButton} id="six">
          6
        </button>
        <button onClick={numberButton} id="one">
          1
        </button>
        <button onClick={numberButton} id="two">
          2
        </button>
        <button onClick={numberButton} id="three">
          3
        </button>
        <button onClick={numberButton} id={styles.zero}>
          0
        </button>
      </div>
    </>
  );
}

export default Numpad;
