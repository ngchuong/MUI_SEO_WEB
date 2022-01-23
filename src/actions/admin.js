import { requestAllUser } from "../api";

import { updateAllUser } from "../store/reducers/user";

export const reqAllUser = () => async (dispatch) => {
  let response;
  try {
    response = await requestAllUser();
  } catch (err) {
    console.log(err);
  }
  console.log(response);
  if (response) {
    dispatch(updateAllUser(response));
  }
};
