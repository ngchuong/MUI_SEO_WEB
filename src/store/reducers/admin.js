import { createSlice } from "@reduxjs/toolkit";

const initialState = { allUser: [], allTask: [], allWithdrawal: [] };

const Admin = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    updateAllUser(state, { payload }) {
      return { ...state, allUser: payload };
    },
    updateAllTask(state, { payload }) {
      return { ...state, allTask: payload };
    },
    updateAllWithdrawal(state, { payload }) {
      return { ...state, allWithdrawal: payload };
    },
  },
});

export const { updateAllUser, updateAllTask, updateAllWithdrawal } = Admin.actions;
export default Admin.reducer;
