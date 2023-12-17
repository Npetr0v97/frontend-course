import React, { useState } from "react";
import styles from "./InfoPanel.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useFetchData } from "../hooks/useFetchData";

function InfoPanel() {
  const inspirationalQuoteData = useSelector(
    (state) => state.dashboardData.inspirationalQuoteArray
  );

  // console.log(inspirationalQuoteData);
  const dispatch = useDispatch();
  const [currentInspirationQuoteIndex, setCurrentInspirationalQuoteIndex] =
    useState(0);
  //api -> https://docs.zenquotes.io/zenquotes-documentation/
  //fetch via AXIOS

  const inspQuoteOptions = {
    method: "GET",
    url: "https://olato-quotes.p.rapidapi.com/motivation",
    params: {
      quotes: "random quotes",
    },
    headers: {
      "X-RapidAPI-Key": "79a2ec61b7mshf8c268be9dea7c1p14b9dfjsnd963c6ef5fb1",
      "X-RapidAPI-Host": "olato-quotes.p.rapidapi.com",
    },
  };

  useFetchData(inspQuoteOptions);

  //TODO the text in the div cannot be selectable. Only a cursor should be used as the pointer
  function onClickHandler() {
    if (currentInspirationQuoteIndex < inspirationalQuoteData.length - 1) {
      setCurrentInspirationalQuoteIndex((prevState) => prevState + 1);
    } else {
      setCurrentInspirationalQuoteIndex(0);
    }
  }
  return (
    <div className={styles.mainDiv} onClick={onClickHandler}>
      <h3 className={styles.title}>Interesting fact</h3>
      <p className={styles.content}>
        {inspirationalQuoteData[currentInspirationQuoteIndex].content}
      </p>
      <p>
        Author: {inspirationalQuoteData[currentInspirationQuoteIndex].author}
      </p>
    </div>
  );
}

export default InfoPanel;
