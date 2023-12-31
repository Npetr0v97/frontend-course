import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./ToDo.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodosArray,
  updateCompletedValue,
} from "../../features/todosData/todosData";

function ToDo({ todoData }) {
  const dispatch = useDispatch();

  async function changeHandler() {
    const newTodo = {
      ...todoData,
      completed: !todoData.completed,
    };

    // dispatch(
    //     updateCompletedValue({
    //       id: todoData._id,
    //       newCompleted: newTodo.completed,
    //     })
    //   );

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const options = {
        method: "PUT",
        url: `http://localhost:3000/api/todos/${todoData._id}`,

        data: newTodo,
        signal,
      };

      const response = await axios.request(options);
      if (response.status != 200) {
        throw new Error("Unable to update Todo");
      } else {
        console.log("Succesfully updated");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    // try {
    //   const postOptions = {
    //     method: "POST",
    //     url: "http://localhost:3000/api/todos",
    //     data: newTodo,
    //   };
    //   const response = await axios.request(postOptions);
    //   console.log(response);
    //   if (response.status !== 201) {
    //     throw new Error("Unable to create a new Todo");
    //   } else {
    //     console.log(response.data.response);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    console.log("Deleted");
  }

  return (
    <div className={styles.mainDiv}>
      <input
        type="checkbox"
        id="isChecked"
        className={styles.checkbox}
        checked={todoData.completed}
        onChange={changeHandler}
      />
      <h3 className={styles.content}>{todoData.content}</h3>
      <button onClick={handleDelete} className={styles.deleteButton}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default ToDo;
