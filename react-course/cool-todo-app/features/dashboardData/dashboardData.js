import { createSlice } from "@reduxjs/toolkit";

const inspirationalQuoteArray = JSON.parse(
  localStorage.getItem("inspirationalQuoteArray")
) || [
  {
    content: "Pending load...",
    author: "...",
  },
];
const interestingFactArray = JSON.parse(
  localStorage.getItem("interestingFactArray")
) || [
  {
    content: "Pending load...",
    author: "...",
  },
];
const initialState = {
  inspirationalQuoteArray,
  interestingFactArray,
};

export const dashboardDataSlice = createSlice({
  name: "dashboardData",
  initialState,
  reducers: {
    resetData: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = initialState;
    },
    setInspirationalQuote: (state, action) => {
      state.inspirationalQuoteArray = action.payload;
      localStorage.setItem(
        "inspirationalQuoteArray",
        JSON.stringify(action.payload)
      );
    },
    setInterestingFact: (state, action) => {
      state.interestingFactArray = action.payload;
      localStorage.setItem(
        "interestingFactArray",
        JSON.stringify(action.payload)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetData, setInspirationalQuote, setInterestingFact } =
  dashboardDataSlice.actions;

export default dashboardDataSlice.reducer;
