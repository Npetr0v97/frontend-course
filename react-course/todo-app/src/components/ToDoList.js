import React from "react";
// import styles from "./ToDoList.module.css";
import "./ToDoList.css";
import ToDo from "./ToDo";
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
    <div>
      <form onSubmit={submitHandler} className="form__group">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="todo"
          id="todo"
          value={todoText}
          onChange={changeHandler}
          required
        />
        <label htmlFor="todo" className="form__label">
          Write your ToDo
        </label>
      </form>
      <div>
        <ToDo />
      </div>
    </div>
  );
}

export default ToDoList;
