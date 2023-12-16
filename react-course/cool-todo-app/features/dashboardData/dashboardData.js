import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inspirationalQuote: {
    content: "kuramiyanko",
    author: "mi az be",
  },
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
      console.log("called");
      state.inspirationalQuote = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetData, setInspirationalQuote } = dashboardDataSlice.actions;

export default dashboardDataSlice.reducer;
