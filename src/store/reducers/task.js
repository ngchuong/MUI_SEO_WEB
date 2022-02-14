// function data(state) {
import { createSlice } from "@reduxjs/toolkit";

const initialState = { randomTask: {}, currentTask: {} };

const Task = createSlice({
  name: "Task",
  initialState,
  reducers: {
    updateRandomTask(state, { payload }) {
      return { ...state, randomTask: payload };
    },
    updateCurrentTask(state, { payload }) {
      return { ...state, currentTask: payload };
    },
  },
});

export const { updateRandomTask, updateCurrentTask } = Task.actions;
export default Task.reducer;
