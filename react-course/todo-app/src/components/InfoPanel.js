import React, { useState } from "react";
import styles from "./InfoPanel.module.css";
import { useSelector } from "react-redux";
import { useFetchData } from "../hooks/useFetchData";
import { onClickIndexChanger } from "../../utils/helperFunctions";

function InfoPanel() {
  const inspirationalQuoteData = useSelector(
    (state) => state.dashboardData.inspirationalQuoteArray
  );

  const [currentArrIndex, setCurrentArrIndex] = useState(0);
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

  useFetchData(inspQuoteOptions, "QUOTE");

  return (
    <div
      className={styles.mainDiv}
      onClick={() => {
        onClickIndexChanger(
          currentArrIndex,
          inspirationalQuoteData.length,
          setCurrentArrIndex
        );
      }}
    >
      <h3 className={styles.title}>Inspirational Quote</h3>
      <p className={styles.content}>
        {inspirationalQuoteData[currentArrIndex].content}
      </p>
      <p className={styles.content}>
        Author: {inspirationalQuoteData[currentArrIndex].author}
      </p>
    </div>
  );
}

export default InfoPanel;
