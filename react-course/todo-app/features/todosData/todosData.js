import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    content: "Pending load...",
    completed: false,
    _id: "xxx",
  },
];

export const todosDataSlice = createSlice({
  name: "todosData",
  initialState,
  reducers: {
    resetData: (state) => {
      state = initialState;
    },
    setTodosArray: (state, action) => {
      return action.payload;
    },
    updateCompletedValue: (state, action) => {
      console.log(action.payload);
      const { id, newCompleted } = action.payload;
      return [
        ...state.map((val) => {
          if (val._id === id) {
            return { ...val, completed: newCompleted };
          }
        }),
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetData, setTodosArray, updateCompletedValue } =
  todosDataSlice.actions;

export default todosDataSlice.reducer;
