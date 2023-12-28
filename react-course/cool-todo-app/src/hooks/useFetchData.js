import { useEffect } from "react";
import {
  setInspirationalQuote,
  setInterestingFact,
} from "../../features/dashboardData/dashboardData";
import axios from "axios";
import { useDispatch } from "react-redux";
import { extractContent, extractAuthor } from "../../utils/helperFunctions";

export function useFetchData(options, choice) {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      const finalArray = [];
      //TODO change to -> https://rapidapi.com/parthbhuva97/api/quotes85/pricing when doing the final version
      //TODO when running this based on the date, have a true/false value that checks if it's current date. If not, then refetch new data. A current date needs to be added to the store

      const lastDate =
        new Date(JSON.parse(localStorage.getItem("lastDate"))) ||
        new Date(1900, 0, 1);
      const currentDate = new Date();

      if (
        currentDate.getDate() === lastDate.getDate() &&
        currentDate.getMonth() === lastDate.getMonth() &&
        currentDate.getFullYear() === lastDate.getFullYear()
      ) {
        return;
      }
      const finalOptions = { ...options, signal };

      try {
        while (finalArray.length !== 3) {
          const response = await axios.request(finalOptions);

          if (choice === "QUOTE") {
            const { quote } = response.data;
            const author = extractAuthor(quote);
            const content = extractContent(quote);

            //if the array is empty, push the results into it
            if (finalArray.length == 0) {
              finalArray.push({ content, author });
            } else if (!finalArray.some((el) => el.content === content)) {
              //if the array isn't empty and doesn't already contain an element with the same content, then add it. Otherwise we would have elements with duplicate values
              finalArray.push({ content, author });
            }

            if (finalArray.length == 3) {
              dispatch(setInspirationalQuote([...finalArray]));
              break;
            }
          } else if (choice === "FACT") {
            const factsObj = response.data;
            const content = `${factsObj.number} is ${factsObj.text}.`;
            //if the array is empty, push the results into it
            if (finalArray.length == 0) {
              finalArray.push({ content });
            } else if (!finalArray.some((el) => el.content === content)) {
              //if the array isn't empty and doesn't already contain an element with the same content, then add it. Otherwise we would have elements with duplicate values
              finalArray.push({ content });
            }

            if (finalArray.length == 3) {
              dispatch(setInterestingFact([...finalArray]));
              break;
            }
          }
        }
        localStorage.setItem("lastDate", JSON.stringify(currentDate));
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
}
