// Exercise 1: Using useContext

// Create a React context for a user's authentication status (logged in or logged out).
// Build a simple login form component that updates the authentication status using the context.
// Create a user profile component that displays different content based on the user's authentication status, utilizing useContext to access the authentication state.

import { useContext, useState } from "react";
import styles from "./LoginForm.module.css";
import { users } from "../seedData/data";
import { LoggedInContext, UserContext } from "../contexts/loggedUserContext";

function LoginForm({ userNameSetter, isLoggedInSetter }) {
  const initialUser = { username: "", password: "" };
  const [userData, setUserData] = useState(initialUser);

  const isLoggedIn = useContext(LoggedInContext);

  function changeHandler(e) {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    const [currentUser] = users.filter(
      (user) =>
        user.username === userData.username &&
        user.password === userData.password
    );

    if (currentUser) {
      userNameSetter(currentUser.username);
      isLoggedInSetter(true);
      setUserData(initialUser);
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <>
      <form
        action=""
        onSubmit={submitHandler}
        className={isLoggedIn ? styles.hide : ""}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={changeHandler}
        />
        <label htmlFor="password">Password</label>
        {/* TODO change type to password */}
        <input
          type="text"
          id="password"
          name="password"
          value={userData.password}
          onChange={changeHandler}
        />
        <button>Login</button>
      </form>
    </>
  );
}

export default LoginForm;
