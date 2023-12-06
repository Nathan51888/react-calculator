import styles from "./TextField.module.css";

function TextField() {
  return (
    <>
      <div className={styles.textFieldBox}>
        <h4 id={styles.textFieldResult}></h4>
        <h2 id={styles.textField}>:</h2>
      </div>
    </>
  );
}

export default TextField;
