// function data(state) {
import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentTask: "" };

const Task = createSlice({
  name: "Task",
  initialState,
  reducers: {
    updateCurrenttask(state, { payload }) {
      return { ...state, currentTask: payload };
    },
  },
});

export const { updateCurrenttask } = Task.actions;
export default Task.reducer;
