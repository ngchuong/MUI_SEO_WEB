// function data(state) {
import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentTask: {} };

const Task = createSlice({
  name: "Task",
  initialState,
  reducers: {
    updateCurrentTask(state, { payload }) {
      return { ...state, currentTask: payload };
    },
  },
});

export const { updateCurrentTask } = Task.actions;
export default Task.reducer;
