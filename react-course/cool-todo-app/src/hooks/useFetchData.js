import { useEffect } from "react";
import { setInspirationalQuote,setInterestingFact } from "../../features/dashboardData/dashboardData";
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
  
            if (finalArray.length == 1 || finalArray.length == 3) {
              //when there is at least 1 element, dispatch it so that we can instantly display some data to the interface. Otherwise wait until the array has the desired amount of elements before it gets dispatched
              dispatch(setInspirationalQuote([...finalArray]));
              if (finalArray.length == 3) {
                break;
              }
            }
          } else if (choice === "FACT") {
            const factsObj = response.data;
            const content = `${factsObj.number} is ${factsObj.text}.`
             //if the array is empty, push the results into it
             if (finalArray.length == 0) {
              finalArray.push({ content });
            } else if (!finalArray.some((el) => el.content === content)) {
              //if the array isn't empty and doesn't already contain an element with the same content, then add it. Otherwise we would have elements with duplicate values
              finalArray.push({ content });
            }
  
            if (finalArray.length == 1 || finalArray.length == 3) {
              //when there is at least 1 element, dispatch it so that we can instantly display some data to the interface. Otherwise wait until the array has the desired amount of elements before it gets dispatched
              dispatch(setInterestingFact([...finalArray]));
              if (finalArray.length == 3) {
                break;
              }
            }
          }
        }
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
