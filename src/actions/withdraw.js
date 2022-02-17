import { updateAllWithdrawal } from "store/reducers/user";
import { requestAllWithdraw } from "../api/withdraw";

export const reqGetAllWithdraw = (userId) => async (dispatch) => {
  let response;
  try {
    response = await requestAllWithdraw(userId);
  } catch (err) {
    console.log(err);
  }

  if (response && /20[0-9]/.test(response.status)) {
    dispatch(updateAllWithdrawal(response.data));
  }
};
