import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  },
});

export const { updateAllWithdrawal } = User.actions;
export default User.reducer;
