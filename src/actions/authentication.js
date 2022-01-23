import { requestSignIn, requestSignUp } from "../api";

import { updateCurrentUser, updateIsSignIn } from "../store/reducers/user";

export const reqSignIn =
  ({ email, pwd }) =>
  async (dispatch) => {
    let response;
    try {
      response = await requestSignIn(email, pwd);
    } catch (err) {
      console.log(err);
    }
    if (response && response.status === 200) {
      dispatch(updateCurrentUser(response.data));
      dispatch(updateIsSignIn(true));
    }
  };

export const reqSignUp =
  ({ name, phone, address, email, pwd }) =>
  async () => {
    let response;
    try {
      response = await requestSignUp(name, phone, address, email, pwd);
    } catch (err) {
      console.log(err);
    }

    console.log(response);
    if (response) {
      // dispatch(updateCurrentUser(response));
    }
  };
