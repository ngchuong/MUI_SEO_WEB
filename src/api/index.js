import axios from "axios";
import { host } from "configs.js";

axios.defaults.withCredentials = true;

// authentication
export function requestSignIn(email, password) {
  return axios.post(`${host}/api/sessions`, { email, password }).then((res) => res);
}
export function requestSignUp(name, telephone, address, email, password) {
  const userSocialId = 123456789;
  return axios
    .post(`${host}/api/users`, {
      name,
      telephone,
      address,
      email,
      password,
      user_social_id: userSocialId,
    })
    .then((res) => res);
}

export function requesVerify() {
  return axios.post(`${host}/verify`).then((res) => res);
}

export function requestLogout() {
  return axios.delete(`${host}/api/sessions`).then((res) => res);
}
