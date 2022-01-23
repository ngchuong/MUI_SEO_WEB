import { createSlice } from "@reduxjs/toolkit";

const initialState = { allUser: [], allTask: [] };

const Admin = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    updateAllUser(state, { payload }) {
      return { ...state, allUser: payload };
    },
    updateAllTask(state, { payload }) {
      return { ...state, allTask: [...state.allTask, ...payload] };
    },
  },
});

export const { updateAllUser, updateAllTask } = Admin.actions;
export default Admin.reducer;
