import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUser: {}, isSignIn: false, isAdmin: false };

const User = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateCurrentUser(state, { payload }) {
      return { ...state, currentUser: payload, isAdmin: payload.is_admin, isSignIn: true };
    },
    updateIsSignIn(state, { payload }) {
      // return { ...state, isSignIn: payload };
    },
  },
});

export const { updateCurrentUser, updateIsSignIn } = User.actions;
export default User.reducer;
