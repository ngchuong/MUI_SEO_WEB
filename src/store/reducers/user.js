import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const User = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateCurrentUser(state, { payload }) {},
    updateIsSignIn(state, { payload }) {},
  },
});

export const { updateCurrentUser, updateIsSignIn } = User.actions;
export default User.reducer;
