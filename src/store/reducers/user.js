import { createSlice } from "@reduxjs/toolkit";

import { getCookie } from "utils/cookie";

const initialState = {
  userInfo: getCookie("user") || {},
  allWithdrawal: [],
};

const User = createSlice({
  name: "User",
  initialState,
  reducers: {
    updateAllWithdrawal(state, { payload }) {
      return {
        ...state,
        allWithdrawal: payload,
      };
    },
    updateUserInfo(state, { payload }) {
      return {
        ...state,
        userInfo: payload,
      };
    },
  },
});

export const { updateAllWithdrawal, updateUserInfo } = User.actions;
export default User.reducer;
