import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inspirationalQuoteArray: [
    {
      content: "Pending load...",
      author: "...",
    },
  ],
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
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetData, setInspirationalQuote } = dashboardDataSlice.actions;

export default dashboardDataSlice.reducer;
