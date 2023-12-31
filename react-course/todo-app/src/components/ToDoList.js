import React, { useEffect } from "react";
// import styles from "./ToDoList.module.css";
import "./ToDoList.css";
import ToDo from "./ToDo";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTodosArray } from "../../features/todosData/todosData";

export function ToDoList() {
  // const [todoText, setTodoText] = useState("");
  const todosArray = useSelector((state) => state.todosData);

  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getTodos() {
      const options = {
        method: "GET",
        url: "http://localhost:3000/api/todos",
        signal,
      };
      try {
        const response = await axios.request(options);

        if (response.statusText !== "OK") {
          throw new Error("Failed to fetch Todos");
        }
        const todos = response.data.todos;

        dispatch(setTodosArray([...todos]));
      } catch (error) {
        console.log(error);
      }
    }

    getTodos();

    return () => {
      // cleanup

      controller.abort();
    };
  }, []);

  async function submitHandler(event) {
    event.preventDefault();
    const newTodo = {
      content: todoText,
      completed: false,
    };
    try {
      const postOptions = {
        method: "POST",
        url: "http://localhost:3000/api/todos",
        data: newTodo,
      };
      const response = await axios.request(postOptions);
      console.log(response);
      if (response.status !== 201) {
        throw new Error("Unable to create a new Todo");
      } else {
        console.log(response.data.response);
        setTodoText("");
        // setTodosArray((prevState) => [...prevState, response.data.response]);
        dispatch(setTodosArray([...todosArray, response.data.response]));
      }
    } catch (error) {
      console.log(error);
    }
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
          // value={todoText}
          onChange={changeHandler}
          required
        />
        <label htmlFor="todo" className="form__label">
          Write your ToDo
        </label>
      </form>
      <div>
        {todosArray.map((todo) => {
          // console.log(todo);
          return <ToDo key={todo._id} todoData={todo} />;
        })}
      </div>
    </div>
  );
}

export default ToDoList;
