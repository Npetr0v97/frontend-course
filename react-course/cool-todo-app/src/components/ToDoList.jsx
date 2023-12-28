import React from "react";
import styles from "./ToDoList.module.css";

function ToDoList() {
  return (
    <div>
      <h2 className={styles.header}>You've got some stuff to do...</h2>
      <div>Search Box</div>
      <div>ToDoList</div>
    </div>
  );
}

export default ToDoList;
