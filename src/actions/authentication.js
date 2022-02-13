import { requestSignUp, requestLogout } from "../api";

import { setCookie, eraseCookie } from "../utils/cookie";

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

export const reqSignOut = () => async () => {
  let response;
  try {
    response = await requestLogout();
  } catch (err) {
    console.log(err);
  }

  console.log(response);

  eraseCookie("user");
};
