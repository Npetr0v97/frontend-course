import React from "react";
import styles from "./Frame.module.css";

function Frame(props) {
  //TODO cool frame border
  return <div className={styles.wrapper}>{props.children}</div>;
}

export default Frame;
