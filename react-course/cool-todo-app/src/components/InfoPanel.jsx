import React, { useEffect, useState } from "react";
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
    (state) => state.dashboardData.inspirationalQuoteArray
  );

  // console.log(inspirationalQuoteData);
  const dispatch = useDispatch();
  const [currentInspirationQuoteIndex, setCurrentInspirationalQuoteIndex] =
    useState(0);
  //api -> https://docs.zenquotes.io/zenquotes-documentation/
  //fetch via AXIOS

  //TODO Trigger the API untill it has collected 3 different quotes into an array.
  //TODO transfer this useEffect into a custom hook.

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      const quoteArray = [];
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
        while (quoteArray.length !== 3) {
          const data = await axios.request(optionsAXIOS);
          const { quote } = data.data;
          const author = quote.slice(
            (quote.length - quote.lastIndexOf("-") - 1) * -1
          );
          const content = quote.slice(0, quote.lastIndexOf("-") - 1);

          if (quoteArray.length == 0) {
            quoteArray.push({ content, author });
          } else if (!quoteArray.some((el) => el.content === content)) {
            quoteArray.push({ content, author });
          }

          if (quoteArray.length == 1 || quoteArray.length == 3) {
            dispatch(setInspirationalQuote([...quoteArray]));
            if (quoteArray.length == 3) {
              break;
            }
          }
        }

        console.log(quoteArray);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();

    return () => {
      // cleanup

      controller.abort();
    };
  }, []);

  //TODO onclick should change between the options from the Array. Meaning that a rerender needs to happen
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
