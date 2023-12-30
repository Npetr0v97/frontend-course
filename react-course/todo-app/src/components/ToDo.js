import React from "react";
import styles from "./ToDo.module.css";

function ToDo() {
  return (
    <div className={styles.mainDiv}>
      <input type="checkbox" id="isChecked" className={styles.checkbox} />
      <h3 className={styles.content}>
        Content. You would need to program today
      </h3>
    </div>
  );
}

export default ToDo;
