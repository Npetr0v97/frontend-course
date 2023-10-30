import { useContext } from "react";
import { LoggedInContext, UserContext } from "../contexts/loggedUserContext";

export function useLocalStorage() {
  const user = useContext(UserContext);
  const isLoggedIn = useContext(LoggedInContext);

  if (isLoggedIn) {
    localStorage.setItem("username", user);
  }

  return isLoggedIn;
}
