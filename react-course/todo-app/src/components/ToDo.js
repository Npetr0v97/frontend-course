import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./ToDo.module.css";
import axios from "axios";
import Label from "./Label";

function ToDo({ todoData, deleteHandler }) {
  const [currentTodo, setCurrentTodo] = useState({ ...todoData });
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(todoData.content);
  const inputRef = useRef(null);

  async function changeHandler() {
    const resolved = !currentTodo.completed ? new Date() : null;

    const newTodo = {
      ...currentTodo,
      resolved: resolved,
      completed: !currentTodo.completed,
    };
    console.log(newTodo);

    try {
      const options = {
        method: "PUT",
        url: `http://localhost:3000/api/todos/${currentTodo._id}`,
        data: newTodo,
      };

      const response = await axios.request(options);
      if (response.status != 200) {
        throw new Error("Unable to update Todo");
      } else {
        // setIsChecked((prevState) => !prevState);
        setCurrentTodo({ ...response.data });
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function inputClickHandler() {
    if (!currentTodo.completed) {
      setIsEditing(true);
    }
  }

  function inputChangeHandler(e) {
    setTodoText(e.target.value);
  }

  async function inputBlurAndSubmitHandler(e) {
    e.preventDefault();
    setIsEditing(false);

    if (todoText == "") {
      return;
    }
    const newTodo = {
      ...currentTodo,
      content: todoText,
    };

    try {
      const options = {
        method: "PUT",
        url: `http://localhost:3000/api/todos/${currentTodo._id}`,
        data: newTodo,
      };

      const response = await axios.request(options);
      if (response.status != 200) {
        throw new Error("Unable to update Todo");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.secondaryDiv}>
        <input
          type="checkbox"
          id="isChecked"
          className={styles.checkbox}
          checked={currentTodo.completed}
          onChange={changeHandler}
        />

        {isEditing ? (
          <form onSubmit={inputBlurAndSubmitHandler}>
            <input
              className={styles.input}
              value={todoText}
              onChange={inputChangeHandler}
              onBlur={inputBlurAndSubmitHandler}
              ref={inputRef}
              required
            />
          </form>
        ) : (
          <h3
            className={`${styles.content} ${
              currentTodo.completed ? styles.contentBlur : ""
            }`}
            onClick={inputClickHandler}
          >
            {todoText === "" ? todoData.content : todoText}
          </h3>
        )}

        <button
          onClick={() => deleteHandler(currentTodo._id)}
          className={styles.deleteButton}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <hr
        className={`${styles.strikethrough} ${
          currentTodo.completed ? styles.strWidth : ""
        }`}
      />
      <Label resolved={currentTodo.resolved} />
    </div>
  );
}

export default ToDo;
