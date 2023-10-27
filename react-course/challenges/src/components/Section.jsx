import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext";
import styles from "./Section.module.css";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <LevelContext.Provider value={level + 1}>
      <section className={styles.section}>{children}</section>
    </LevelContext.Provider>
  );
}
