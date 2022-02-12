import { requestSignIn, requestSignUp, requesVerify } from "../api";

import { setCookie } from "../utils/cookie";

export const reqSignIn =
  ({ email, pwd }) =>
  async (dispatch) => {
    let response;
    try {
      response = await requestSignIn(email, pwd);
    } catch (err) {
      console.log(err);
    }

    setCookie("user", response.data.user);
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

export const reqVerify = () => async () => {
  let response;
  try {
    response = requesVerify();
  } catch (err) {
    console.log(err);
  }

  return response;
};
