import React from "react";
import styles from "./ToDoList.module.css";
import { useState } from "react";

function ToDoList() {
  const [todoText, setTodoText] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    console.log("To Do created");
  }

  function changeHandler(event) {
    setTodoText(event.target.value);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form__group}>
      <input
        type="input"
        className={styles.form__field}
        placeholder="Name"
        name="todo"
        id="todo"
        value={todoText}
        onChange={changeHandler}
        required
      />
      <label htmlFor="todo" className={styles.form__label}>
        Write your ToDo
      </label>
    </form>
  );
}

export default ToDoList;
