import { useContext } from "react";
import { LoggedInContext, UserContext } from "../contexts/loggedUserContext";
import styles from "./DummyText.module.css";

function DummyText({ userNameSetter, isLoggedInSetter }) {
  let user = useContext(UserContext);
  const isLoggedIn = useContext(LoggedInContext);

  user = user !== "" ? user : "nobody";

  function clickHandler() {
    userNameSetter("");
    isLoggedInSetter(false);
  }

  return (
    <div className={isLoggedIn ? "" : styles.hide}>
      <h1>Logged in! Welcome, {user}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
        sapiente magni dolorem velit rem? Veniam autem laudantium voluptate quia
        assumenda possimus tempora, rem quo beatae dolores doloremque dolorum
        suscipit reprehenderit!
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi vel
        quisquam nam tempore nulla qui repellat omnis, eligendi ullam, maiores
        voluptas autem. Nulla, aliquam? Explicabo sequi nesciunt iste natus non.
        Impedit quis ratione tempore itaque asperiores aperiam voluptatum
        tempora vitae molestiae at expedita inventore accusamus enim distinctio
        iste, praesentium a minus quasi tenetur quisquam ea animi quibusdam. A,
        voluptates aperiam? Pariatur repellendus totam, vero fugit ullam dolor
        molestiae eaque repudiandae minus libero corporis numquam ratione, hic
        amet, sequi vitae blanditiis! Magnam atque sunt aut incidunt aliquid.
        Amet vitae quidem velit!
      </p>

      <button onClick={clickHandler}>Logout</button>
    </div>
  );
}

export default DummyText;
