import styles from "./TextField.module.css";

function TextField({ textField, textFieldResult }) {
  return (
    <>
      <div className={styles.textFieldBox}>
        <h4 id={styles.textFieldResult}>{textFieldResult}</h4>
        <h2 id={styles.textField}>:{textField}</h2>
      </div>
    </>
  );
}

export default TextField;
