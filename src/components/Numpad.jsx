import styles from "./Numpad.module.css";

function Numpad() {
  return (
    <>
      <div className={styles.numpad}>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button id={styles.zero}>0</button>
      </div>
    </>
  );
}

export default Numpad;
