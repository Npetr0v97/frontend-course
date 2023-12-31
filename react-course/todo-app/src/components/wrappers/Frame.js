import React from "react";
import styles from "./Frame.module.css";

export function Frame(props) {
  return <div className={styles.wrapper}>{props.children}</div>;
}

export default Frame;
