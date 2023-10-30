import LoginForm from "./components/LoginForm";
import DummyText from "./components/DummyText";

import { useState } from "react";
import { LoggedInContext, UserContext } from "./contexts/loggedUserContext";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  console.log(username);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <LoggedInContext.Provider value={isLoggedIn}>
        <UserContext.Provider value={username}>
          <LoginForm
            userNameSetter={setUsername}
            isLoggedInSetter={setIsLoggedIn}
          />
          <DummyText
            userNameSetter={setUsername}
            isLoggedInSetter={setIsLoggedIn}
          />
        </UserContext.Provider>
      </LoggedInContext.Provider>
    </>
  );
}

export default App;
