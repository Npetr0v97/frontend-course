import { configureStore } from "@reduxjs/toolkit";
import dummyDataReducer from "../../features/dummyData/dummyDataSlice";

export const store = configureStore({
  reducer: {
    dummyData: dummyDataReducer,
  },
});
