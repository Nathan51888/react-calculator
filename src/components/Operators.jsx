import styles from "./Operators.module.css";

function Operators({ backspace, plus, minus, equals }) {
  return (
    <>
      <div className={styles.operatorGroup}>
        <button onClick={backspace} className={styles.operator} id={styles.backspace}>
          AC
        </button>
        <button onClick={plus} className={styles.operator} id={styles.plus}>
          +
        </button>
        <button onClick={minus} className={styles.operator} id={styles.minus}>
          -
        </button>
        <button onClick={equals} className={styles.operator} id={styles.equals}>
          =
        </button>
      </div>
    </>
  );
}

export default Operators;
