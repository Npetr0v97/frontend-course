import React from "react";
import styles from "./InfoPanel.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  resetDummyData,
  setDummyData,
} from "../../features/dummyData/dummyDataSlice";

function InfoPanel() {
  const dummyData = useSelector((state) => state.dummyData.value);
  const dispatch = useDispatch();

  //api -> https://docs.zenquotes.io/zenquotes-documentation/
  //fetch via AXIOS

  function onClickHandler() {
    console.log("Clicked");
    dispatch(setDummyData("Nikolay Petrov"));
  }
  return (
    <div className={styles.mainDiv} onClick={onClickHandler}>
      <h3 className={styles.title}>Interesting fact</h3>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        laboriosam aliquam autem dolor pariatur? Sint deleniti porro earum
        officia blanditiis corrupti laborum veritatis itaque cum, amet autem
        aliquid, alias voluptatum.
      </p>
      <p>Author: {dummyData}</p>
    </div>
  );
}

export default InfoPanel;
