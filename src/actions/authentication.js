import { requestSignIn, requestSignUp } from "../api";

import { updateCurrentUser } from "../store/reducers/user";

export const reqSignIn =
  ({ email, pwd }) =>
  async () => {
    let response;
    try {
      response = await requestSignIn(email, pwd);
    } catch (err) {
      console.log(err);
    }
    console.log(response);
  };

export const reqSignUp =
  ({ name, email, pwd }) =>
  async (dispatch) => {
    let response;
    try {
      response = await requestSignUp(name, email, pwd);
    } catch (err) {
      console.log(err);
    }

    console.log(response);
    if (response) {
      dispatch(updateCurrentUser(response));
    }
  };
