import { useEffect } from "react";
import { setInspirationalQuote } from "../../features/dashboardData/dashboardData";
import axios from "axios";
import { useDispatch } from "react-redux";

export function useFetchData(options) {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      const quoteArray = [];
      //TODO change to -> https://rapidapi.com/parthbhuva97/api/quotes85/pricing when doing the final version

      const finalOptions = { ...options, signal };
      try {
        while (quoteArray.length !== 3) {
          //TODO rewrite those in some helpet functions
          const data = await axios.request(finalOptions);
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
