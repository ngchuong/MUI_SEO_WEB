import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUser: {} };

const User = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateCurrentUser(state, { payload }) {
      return { ...state, currentUser: payload };
    },
  },
});

export const { updateCurrentUser } = User.actions;
export default User.reducer;
