import axios from "axios";
import { host } from "configs.js";

axios.defaults.withCredentials = true;

// authentication
export function requestSignIn(email, password) {
  return axios.post(`${host}/sessions`, { email, password }).then((res) => res);
}
export function requestSignUp(
  name,
  telephone,
  address,
  email,
  password,
  user_social_id,
  related_data
) {
  return axios
    .post(`${host}/users`, {
      name,
      email,
      telephone,
      address,
      password,
      user_social_id,
      related_data,
    })
    .then((res) => res);
}

export function requesVerify() {
  return axios
    .post(`${host}/verify`)
    .then((res) => res)
    .then((err) => err);
}

export function requestLogout() {
  return axios.delete(`${host}/sessions`).then((res) => res);
}
