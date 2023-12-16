import React, { useEffect } from "react";
import styles from "./InfoPanel.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  resetDummyData,
  setDummyData,
} from "../../features/dummyData/dummyDataSlice";
import { setInspirationalQuote } from "../../features/dashboardData/dashboardData";
import axios from "axios";

function InfoPanel() {
  const dummyData = useSelector((state) => state.dummyData.value);
  const inspirationalQuoteData = useSelector(
    (state) => state.dashboardData.inspirationalQuote
  );

  // console.log(inspirationalQuoteData);
  const dispatch = useDispatch();
  //api -> https://docs.zenquotes.io/zenquotes-documentation/
  //fetch via AXIOS

  //TODO transfer this useEffect into a custom hook.
  //TODO Trigger the API untill it has collected 3 different quotes into an array.

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      //change to -> https://rapidapi.com/parthbhuva97/api/quotes85/pricing when doing the final version
      const optionsAXIOS = {
        method: "GET",
        url: "https://olato-quotes.p.rapidapi.com/motivation",
        params: {
          quotes: "random quotes",
        },
        headers: {
          "X-RapidAPI-Key":
            "79a2ec61b7mshf8c268be9dea7c1p14b9dfjsnd963c6ef5fb1",
          "X-RapidAPI-Host": "olato-quotes.p.rapidapi.com",
        },
        signal,
      };
      try {
        const data = await axios.request(optionsAXIOS);
        const { quote } = data.data;
        const author = quote.slice(
          (quote.length - quote.lastIndexOf("-") - 1) * -1
        );
        const content = quote.slice(0, quote.lastIndexOf("-") - 1);
        dispatch(setInspirationalQuote({ content, author }));
      } catch (e) {
        // console.log(e.message);
      }
    }
    fetchData();

    return () => {
      // console.log("Cleanup");
      controller.abort();
    };
  }, []);

  //TODO onclick should change between the options from the Array. Meaning that a rerender needs to happen
  function onClickHandler() {
    console.log("Clicked");
    dispatch(setDummyData("Nikolay Petrov"));
  }
  return (
    <div className={styles.mainDiv} onClick={onClickHandler}>
      <h3 className={styles.title}>Interesting fact</h3>
      <p className={styles.content}>{inspirationalQuoteData.content}</p>
      <p>Author: {inspirationalQuoteData.author}</p>
    </div>
  );
}

export default InfoPanel;
