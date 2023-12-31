import { configureStore } from "@reduxjs/toolkit";
import dummyDataReducer from "../../features/dummyData/dummyDataSlice";
import dashboardDataReducer from "../../features/dashboardData/dashboardData";
import todosDataReducer from "../../features/todosData/todosData";

export const store = configureStore({
  reducer: {
    dummyData: dummyDataReducer,
    dashboardData: dashboardDataReducer,
    todosData: todosDataReducer,
  },
});
