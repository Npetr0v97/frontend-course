import styles from "./Label.module.css";

import itemCompletedBefore from "../../utils/itemCompletedBefore";

function Label({ resolved }) {
  return (
    <div
      className={`${styles.label} ${
        resolved !== null ? styles.labelShown : ""
      }`}
    >
      <b>{itemCompletedBefore(Date.parse(resolved))}</b>
    </div>
  );
}

export default Label;
