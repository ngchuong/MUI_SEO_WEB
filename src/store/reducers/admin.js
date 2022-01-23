import { createSlice } from "@reduxjs/toolkit";

const initialState = { allUser: {} };

const Admin = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    updateAllUser(state, { payload }) {
      return { ...state, allUser: payload };
    },
  },
});

export const { updateAllUser } = Admin.actions;
export default Admin.reducer;
